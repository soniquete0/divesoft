import * as React from 'react';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import { Query } from 'react-apollo';
import ReactMarkdown from 'react-markdown';

import Link from '../../partials/Link';
import Loader from '@source/partials/Loader';

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

export interface FooterProps {
  data: {
    copyrights: string;
    facebookUrl: LooseObject;
    youtubeUrl: LooseObject;
    instagramUrl: LooseObject;
    contacts: string;
  };
}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    const { copyrights, facebookUrl, youtubeUrl, instagramUrl, contacts } = this.props.data;

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

          const firstBottomNav = 'firstBottom';

          const firstBottomNavItems =
            transformedNavigations && transformedNavigations[firstBottomNav] ? 
            transformedNavigations[firstBottomNav] : 
            [];

          const secondBottomNav = 'secondBottom';

          const secondBottomNavItems =
            transformedNavigations && transformedNavigations[secondBottomNav] ? 
            transformedNavigations[secondBottomNav] : 
            [];
          
          const thirdBottomNav = 'thirdBottom';

          const thirdBottomNavItems =
            transformedNavigations && transformedNavigations[thirdBottomNav] ? 
            transformedNavigations[thirdBottomNav] : 
            [];
          
          return (
            <div>
              <footer className={'footer'}>
                <div className={'container'}>
                  <div className={'footer__newsletter'}>
                    <h3>Divesoft newsletter</h3>
                    <p>Enter your e-mail to subscribe to our newsletter!</p>
                    <form action="#">
                      <input type="email"/>
                      <button className={'btn'}>OK</button>
                    </form>
                  </div>
                  <div className={'footer__divider'} />
                  <div className={'footer__navigation row d-flex justify-content-between align-items-start'}>
                    <nav className={'footer__navigation__item col-12 col-md-6 col-xl'}>
                      <h6>Vše o nákupu</h6>
                      <ul>
                        {firstBottomNavItems &&
                          firstBottomNavItems.map((navItem, i) => (
                            <li key={i}>
                              <Link url={navItem.url && navItem.url}>
                                {navItem.name || navItem.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </nav>
                    <nav className={'footer__navigation__item col-12 col-md-6 col-xl'}>
                      <h6>podpora</h6>
                      <ul>
                        {secondBottomNavItems &&
                          secondBottomNavItems.map((navItem, i) => (
                            <li key={i}>
                              <Link url={navItem.url && navItem.url}>
                                {navItem.name || navItem.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </nav>
                    <nav className={'footer__navigation__item col-12 col-md-6 col-xl'}>
                      <h6>Mapa prodejců</h6>
                      <ul>
                        {thirdBottomNavItems &&
                          thirdBottomNavItems.map((navItem, i) => (
                            <li key={i}>
                              <Link url={navItem.url && navItem.url}>
                                {navItem.name || navItem.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </nav>
                    <div className={'footer__navigation__contacts col-12 col-md-6 col-xl'}>
                      <h6>Kontakt</h6>
                      {contacts && <ReactMarkdown source={contacts} />}
                    </div>
                  </div>
                  <div className={'footer__bottom row'}>
                    <div className={'col'}>
                      <div className={'footer__bottom__social d-flex justify-content-center'}>
                        <Link url={facebookUrl && facebookUrl.url}>
                          <div />
                        </Link>
                        <Link url={youtubeUrl && youtubeUrl.url}>
                          <div />
                        </Link>
                        <Link url={instagramUrl && instagramUrl.url}>
                          <div />
                        </Link>
                      </div>
                      {copyrights && <p>{copyrights}</p>}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
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

export default Footer;