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

var _Loader = _interopRequireDefault(require("../../../lib/partials/Loader"));

var _Hamburger = _interopRequireDefault(require("./components/Hamburger"));

var _Country = _interopRequireDefault(require("./components/Country/Country"));

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

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client \n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client \n  }\n"])));
var GET_PAGES_URLS = (0, _graphqlTag.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
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
        languageData = _a.context.languageData;

    if (!languageData) {
      return render({});
    }

    return React.createElement(_reactApollo.Query, {
      query: GET_PAGES_URLS,
      variables: {
        language: languageData.id
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

    _this.headerWrapper = React.createRef();
    _this.state = {
      menuActive: false
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
      return React.createElement("header", {
        className: "header",
        style: _this.state.menuActive ? {
          overflow: 'inherit'
        } : {
          overflow: 'hidden'
        }
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: 'header__wrapper d-flex justify-content-between align-items-center',
        ref: _this.headerWrapper
      }, React.createElement("div", {
        className: 'header__logo d-flex justify-content-between align-items-center'
      }, React.createElement(_Hamburger.default, {
        active: _this.state.menuActive,
        onClick: _this.toggleMenu
      }), React.createElement(_Link.default, {
        url: "/" + context.websiteData.title.toLowerCase() + "/" + context.languageData.code
      }, React.createElement("img", {
        src: "/assets/divesoft/images/logo.svg",
        alt: "logo"
      }))), React.createElement("nav", null, React.createElement("ul", null, topNavItems && topNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, {
          url: navItem.url && navItem.url
        }, navItem.name || navItem.title));
      }))), React.createElement("div", {
        className: 'header__controls d-flex justify-content-between align-items-center'
      }, React.createElement("img", {
        src: "/assets/divesoft/images/search.svg",
        alt: "search"
      }), React.createElement("img", {
        src: "/assets/divesoft/images/user.svg",
        alt: "account"
      }), React.createElement("button", null, "e-shop")), React.createElement(_Country.default, null))), React.createElement("div", {
        className: "hiddenMenu " + (_this.state.menuActive ? 'hiddenMenu--active' : '')
      }, React.createElement("div", {
        className: 'hiddenMenu__wrapper'
      }, React.createElement("ul", null, topNavItems && topNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, {
          url: navItem.url && navItem.url,
          onClick: function onClick() {
            return _this.closeMenu();
          }
        }, navItem.name || navItem.title));
      })))));
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