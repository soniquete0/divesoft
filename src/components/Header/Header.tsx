import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import Search from '../Search';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Loader from '@source/partials/Loader';
import Button from '@source/partials/Button';
import Hamburger from './components/Hamburger';
// import Country from './components/Country/Country';

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
  query pagesUrls($language: ID!, $websiteId: ID!) {
    pagesUrls(where: { language: $language, websiteId: $websiteId }) {
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
  getPagesUrls: ({ render, context: { languageData, websiteData } }) => {
    if (!(languageData && websiteData)) {
      return render({});
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id, websiteId: websiteData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

interface Product {
  title: string;
  description: string;
  img: LooseObject;
  url: LooseObject;
}

export interface HeaderProps {
  data: {
    products: Product[];
  };
  navigations?: LooseObject;
  languages?: LooseObject;
  languageCode?: string;
}

export interface HeaderState {
  menuActive: boolean;
  showDropdown: boolean;
  showSearch: boolean;
  searchQuery: string;
  visibleProductsSubMenu: boolean;
  subMenuVisible: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      menuActive: false,
      showDropdown: false,
      visibleProductsSubMenu: false,
      subMenuVisible: '',
      showSearch: false,
      searchQuery: ''
    };
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

  toggleDropdown = () => this.setState({ showDropdown: !this.state.showDropdown });

  hideSubMenu = () => {
    this.setState({subMenuVisible: ''});
  }

  submenuVisibility = (cat) => {
    this.setState({subMenuVisible: cat.name});
  }

  canToggle = item => {
    return (item.children || item.name === 'products') ? '#' : item.url.url;
  }

  public render() {
    this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');

    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (!context.navigationsData ||
              !context.languageData ||
              !context.languagesData ||
              !data ||
              !data.pagesUrls) {
            return <Loader />; }

          if (error) { return `Error...${error}`; }

          const {
            navigationsData: navigations,
            languageData: { code: languageCode },
          } = context;

          const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

          const topNav = 'top';

          const topNavItems =
            transformedNavigations && transformedNavigations[topNav] ? transformedNavigations[topNav] : [];

          const { products } = this.props.data ;

          return (
            <>
              <header
                className={`header`}
                style={
                  this.state.menuActive ?
                  {overflow: 'inherit'} :
                  {overflow: 'hidden'}
                }
              >
                <div className="container">
                  <div className={'header__wrapper d-flex justify-content-between align-items-center'} >
                    <Hamburger active={this.state.menuActive} onClick={this.toggleMenu} />
                    <div className="header__logo">
                      <Link
                        url={`${context.websiteData.urlMask === '/' ?
                                '' : context.websiteData.urlMask}/${context.languageData.code}`}
                      >
                        <img src="/assets/divesoft/images/logo.svg" alt="logo" />
                      </Link>
                    </div>
                    {/* TOP MENU - desktop - start */}
                    <nav>
                      <ul>
                      {/* EXPORT NAVIGATION JSON  {console.log(topNavItems)} */}
                      {topNavItems && topNavItems.map((navItem, i) => {
                        return (
                          <li key={i} style={{ position: 'relative' }}>
                            {/* tslint:disable-next-line: max-line-length */}
                            <Link {...navItem.url} url={this.canToggle(navItem)} onMouseEnter={() => this.submenuVisibility(navItem)}>
                              <span className="d-flex no-wrap">
                                {navItem.name || navItem.title}
                                {(navItem.name === 'products' || navItem.children) ?
                                <span
                                  onClick={() => this.toggleDropdown()}
                                  className={'dropdown__arrow'}
                                /> : ''}
                              </span>
                            </Link>
                            {/* {context.pageData.name === navItem.name ?
                              <span className={'header__activePage'} /> : ''} */}

                            {/* SUB MENU - start */}
                            { navItem.name === this.state.subMenuVisible &&
                              navItem.children ?
                              // tslint:disable-next-line: max-line-length
                              <div className="categoriesSubmenu_wrapper" key={navItem.id} onMouseLeave={this.hideSubMenu}>
                                <nav className="categoriesSubmenu">
                                  <ul className="categoriesSubmenu_list">
                                    {
                                      navItem.children.map((navItemChild) => {
                                        // tslint:disable-next-line: max-line-length
                                        return <Link {...navItemChild.url} className="categoriesSubmenu_link" key={navItemChild.id}>
                                          {navItemChild.name}
                                        </Link>;
                                      })
                                    }
                                  </ul>
                                </nav>
                              </div>
                              : ''
                            }
                            {/* SUB MENU - end */}
                          </li>
                        );
                        })
                      }
                      </ul>
                    </nav>
                    {/* TOP MENU - desktop - end */}
                    {/* SEARCH AND LOGIN - start */}
                    <div className={'header__controls d-flex justify-content-between align-items-center'}>
                      <img
                        onClick={() => this.setState({ showSearch: !this.state.showSearch })}
                        src="/assets/divesoft/images/search.svg"
                        alt="search"
                        className="header-ico header-ico_search"
                        style={{ cursor: 'pointer' }}
                      />

                      {this.state.showSearch ?
                        <Search language={context.languageData.code} /> : ''}
                      <a href="http://93.185.96.70:3010/cz/login" className="login-link">
                        <img
                          src="/assets/divesoft/images/user.svg"
                          alt="account"
                          className="header-ico header-ico_user"
                        />
                      </a>
{/* tslint:disable-next-line: max-line-length */}
                      <a href="http://93.185.96.70:3010/" className={'btn btn_eshop cart-ico'}><span className="text">e-shop</span></a>
                    </div>
                    {/* SEARCH AND LOGIN - end */}
                    {/* <Country /> */}
                  </div>
                </div>

                {/* PHONE MENU - start */}
                <div className={`hiddenMenu ${this.state.menuActive ? 'hiddenMenu--active' : ''}`}>
                  <div className={'hiddenMenu__wrapper'}>
                    <ul>
                      {topNavItems &&
                        topNavItems.map((navItem, i) => (
                          <li key={i}>
                            {
                              <Link {...navItem.url} onClick={() => this.closeMenu()}>
                                {navItem.name || navItem.title}
                              </Link>}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/* PHONE MENU - end */}
              </header>

              {/* PRODUCTS SUB MENU - start */}
              {/* {console.log(products)} */}
              {this.state.subMenuVisible === 'products' ?
                <div className="dropdownProducts" onMouseLeave={this.hideSubMenu}>
                  {products && <div className="container">
                    <div className="row productsPreview__list">
                      {products.map((item, i) => (
                        <div key={i} className={'col-12 col-lg-6 col-xl-3'}>
                          <div className={'productsPreview__list__item'}>
                            <Media type={'image'} data={item.img} />
                            {item.title && <h5>{item.title}</h5>}
                            {item.description && <p>{item.description}</p>}
                            <Link {...item.url} onClick={this.hideSubMenu} className="btn">Detail</Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> }
                </div> : ''
              }
              {/* PRODUCTS SUB MENU - end */}
            </>
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

        item.url = {
          url: item.url,
          pageId: item.id,
        };

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Header;
