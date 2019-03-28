"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactAdopt = require("react-adopt");

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Loader = _interopRequireDefault(require("../../../lib/partials/Loader"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _Hamburger = _interopRequireDefault(require("./components/Hamburger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

// import Country from './components/Country/Country';
var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var GET_PAGES_URLS = (0, _graphqlTag.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
var ComposedQuery = (0, _reactAdopt.adopt)({
  context: function context(_a) {
    var render = _a.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  },
  getPagesUrls: function getPagesUrls(_a) {
    var render = _a.render,
        _b = _a.context,
        languageData = _b.languageData,
        websiteData = _b.websiteData;

    if (!(languageData && websiteData)) {
      return render({});
    }

    return React.createElement(_reactApollo.Query, {
      query: GET_PAGES_URLS,
      variables: {
        language: languageData.id,
        websiteId: websiteData.id
      }
    }, function (data) {
      return render(data);
    });
  }
});

var Header =
/** @class */
function (_super) {
  __extends(Header, _super);

  function Header(props) {
    var _this = _super.call(this, props) || this;

    _this.closeMenu = function () {
      _this.setState({
        menuActive: false
      });
    };

    _this.toggleMenu = function () {
      _this.setState({
        menuActive: !_this.state.menuActive
      });
    };

    _this.toggleDropdown = function () {
      return _this.setState({
        showDropdown: !_this.state.showDropdown
      });
    };

    _this.state = {
      menuActive: false,
      showDropdown: false,
      showSearch: false
    };
    return _this;
  }

  Header.prototype.render = function () {
    var _this = this;

    this.state.menuActive ? document.body.style.position = 'fixed' : document.body.style.position = 'static';
    return React.createElement(ComposedQuery, null, function (_a) {
      var _b = _a.getPagesUrls,
          loading = _b.loading,
          error = _b.error,
          data = _b.data,
          context = _a.context;

      if (!context.navigationsData || !context.languageData || !context.languagesData || !data || !data.pagesUrls) {
        return React.createElement(_Loader.default, null);
      }

      if (error) {
        return "Error..." + error;
      }

      var navigations = context.navigationsData,
          languageCode = context.languageData.code;

      var transformedNavigations = _this.transformNavigationsIntoTree(navigations, data.pagesUrls);

      var topNav = 'top';
      var topNavItems = transformedNavigations && transformedNavigations[topNav] ? transformedNavigations[topNav] : [];
      var products = _this.props.data.products;
      return React.createElement(React.Fragment, null, React.createElement("header", {
        className: "header",
        style: _this.state.menuActive ? {
          overflow: 'inherit'
        } : {
          overflow: 'hidden'
        }
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: 'header__wrapper d-flex justify-content-between align-items-center'
      }, React.createElement("div", {
        className: 'header__logo d-flex justify-content-between align-items-center'
      }, React.createElement(_Hamburger.default, {
        active: _this.state.menuActive,
        onClick: _this.toggleMenu
      }), React.createElement(_Link.default, {
        url: (context.websiteData.urlMask === '/' ? '' : context.websiteData.urlMask) + "/" + context.languageData.code
      }, React.createElement("img", {
        src: "/assets/divesoft/images/logo.svg",
        alt: "logo"
      }))), React.createElement("nav", null, React.createElement("ul", null, topNavItems && topNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i,
          style: {
            position: 'relative'
          }
        }, React.createElement(_Link.default, __assign({}, navItem.url), navItem.name || navItem.title), navItem.name === 'products' ? React.createElement("span", {
          onClick: function onClick() {
            return _this.toggleDropdown();
          },
          className: 'dropdownProducts__arrow'
        }) : '');
      }))), React.createElement("div", {
        className: 'header__controls d-flex justify-content-between align-items-center'
      }, React.createElement("img", {
        onClick: function onClick() {
          return _this.setState({
            showSearch: !_this.state.showSearch
          });
        },
        src: "/assets/divesoft/images/search.png",
        alt: "search",
        style: {
          cursor: 'pointer'
        }
      }), _this.state.showSearch ? React.createElement("div", {
        className: 'header__controls__search'
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("input", {
        type: "email",
        placeholder: 'search'
      }))) : '', React.createElement("img", {
        src: "/assets/divesoft/images/user.png",
        alt: "account"
      }), React.createElement("button", null, "e-shop")))), React.createElement("div", {
        className: "hiddenMenu " + (_this.state.menuActive ? 'hiddenMenu--active' : '')
      }, React.createElement("div", {
        className: 'hiddenMenu__wrapper'
      }, React.createElement("ul", null, topNavItems && topNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, __assign({}, navItem.url, {
          onClick: function onClick() {
            return _this.closeMenu();
          }
        }), navItem.name || navItem.title));
      }))))), _this.state.showDropdown ? React.createElement("div", {
        className: 'dropdownProducts'
      }, products && React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "row productsPreview__list"
      }, products.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          className: 'col-12 col-lg-6 col-xl-3'
        }, React.createElement("div", {
          className: 'productsPreview__list__item'
        }, React.createElement(_Media.default, {
          type: 'image',
          data: item.img
        }), item.title && React.createElement("h5", null, item.title), item.description && React.createElement("p", null, item.description), React.createElement(_Button.default, {
          url: item.url
        }, "shop now")));
      })))) : '');
    });
  };

  Header.prototype.transformNavigationsIntoTree = function (navigation, urls) {
    var _this = this;

    var tree = {};

    if (!navigation || navigation.length < 1) {
      return null;
    }

    navigation.forEach(function (nav) {
      tree[nav.name] = _this.buildNavTree(nav.nodes, null, urls);
    });
    return tree;
  };

  Header.prototype.buildNavTree = function (nav, parent, urls) {
    var _this = this;

    var res = [];
    nav.forEach(function (node) {
      if (node.parent === parent) {
        var url = urls.find(function (u) {
          return u.page === node.page;
        });

        var item = __assign({}, node, url);

        if (node.page) {
          var children = _this.buildNavTree(nav, node.page, urls);

          if (children && children.length > 0) {
            item.children = children;
          }
        }

        if (node.title && node.link) {
          item.url = node.link;
        }

        item.url = {
          url: item.url,
          pageId: item.id
        };
        res.push(item);
      }
    });
    res.sort(function (a, b) {
      return a.order - b.order;
    });
    return res;
  };

  return Header;
}(React.Component);

var _default = Header;
exports.default = _default;
var templateObject_1, templateObject_2;