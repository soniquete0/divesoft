import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import Link from '@source/partials/Link';
import Loader from '@source/partials/Loader';
import Hamburger from './components/Hamburger';
import Country from './components/Country/Country';

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client 
  }
`;

const GET_PAGES_URLS = gql`
  query pagesUrls($language: ID!) {
    pagesUrls(where: { language: $language }) {
      id
      page
      url
      name
      description
    }
  }
`;

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData } }) => {
    if (!languageData) {
      return render({});
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

export interface HeaderProps {
  navigations?: LooseObject;
  languages?: LooseObject;
  languageCode?: string;
}

export interface HeaderState {
  menuActive: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  // tslint:disable-next-line:no-any
  public headerWrapper: any;

  constructor(props: HeaderProps) {
    super(props);
    this.headerWrapper = React.createRef();
    this.state = { menuActive: false };
  }

  closeMenu = () => {
    this.setState({
      menuActive: false,
    });
  }

  toggleMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  public render() {
    this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');

    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (
            !context.navigationsData || 
            !context.languageData || 
            !context.languagesData || 
            !data || 
            !data.pagesUrls
          ) {
            return <Loader />;
          }

          if (error) {
            return `Error...${error}`;
          }

          const {
            navigationsData: navigations,
            languageData: { code: languageCode },
          } = context;

          const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

          const topNav = 'top';

          const topNavItems =
            transformedNavigations && transformedNavigations[topNav] ? transformedNavigations[topNav] : [];
          
          return (
            <header 
              className={`header`}
              style={
                this.state.menuActive ? 
                {overflow: 'inherit'} : 
                {overflow: 'hidden'}
              }
            >
              <div className="container">
                <div 
                  className={'header__wrapper d-flex justify-content-between align-items-center'} 
                  ref={this.headerWrapper}
                > 
                  <div className={'header__logo d-flex justify-content-between align-items-center'}>
                    <Hamburger active={this.state.menuActive} onClick={this.toggleMenu} />
                    <Link url={`/${context.websiteData.title.toLowerCase()}/${context.languageData.code}`}>
                      <img src="/assets/divesoft/images/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      {topNavItems &&
                        topNavItems.map((navItem, i) => (
                          <li key={i}>
                            <Link url={navItem.url && navItem.url}>
                              {navItem.name || navItem.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </nav>
                  <div className={'header__controls d-flex justify-content-between align-items-center'}>
                    <img src="/assets/divesoft/images/search.svg" alt="search"/>
                    <img src="/assets/divesoft/images/user.svg" alt="account"/>
                    <button>e-shop</button>
                  </div>
                  <Country />
                </div>
              </div>

              <div className={`hiddenMenu ${this.state.menuActive ? 'hiddenMenu--active' : ''}`}>
                <div className={'hiddenMenu__wrapper'}>
                  <ul>
                    {topNavItems &&
                      topNavItems.map((navItem, i) => (
                        <li key={i}>
                          {
                            <Link url={navItem.url && navItem.url} onClick={() => this.closeMenu()}>
                              {navItem.name || navItem.title}
                            </Link>}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </header>
          );
        }}
      </ComposedQuery>
    );
  }
  private transformNavigationsIntoTree(navigation: LooseObject[], urls: LooseObject[]): LooseObject | null {
    const tree = {};
    if (!navigation || navigation.length < 1) {
      return null;
    }
    navigation.forEach((nav: LooseObject) => {
      tree[nav.name] = this.buildNavTree(nav.nodes, null, urls);
    });
    return tree;
  }
  private buildNavTree(nav: LooseObject[], parent: string | null, urls: LooseObject[]): LooseObject[] {
    const res = [] as LooseObject[];
    nav.forEach((node: LooseObject) => {
      if (node.parent === parent) {
        const url = urls.find((u: LooseObject) => u.page === node.page);
        const item = {
          ...node,
          ...url,
        } as LooseObject;
        if (node.page) {
          const children = this.buildNavTree(nav, node.page, urls);
          if (children && children.length > 0) {
            item.children = children;
          }
        }
        if (node.title && node.link) {
          item.url = node.link;
        }
        res.push(item);
      }
    });
    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Header;