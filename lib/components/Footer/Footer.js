"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactAdopt = require("react-adopt");

var _reactApollo = require("react-apollo");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Loader = _interopRequireDefault(require("../../../lib/partials/Loader"));

var _CookiePopup = _interopRequireDefault(require("./components/CookiePopup"));

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

var Footer =
/** @class */
function (_super) {
  __extends(Footer, _super);

  function Footer(props) {
    return _super.call(this, props) || this;
  }

  Footer.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        copyrights = _a.copyrights,
        facebookUrl = _a.facebookUrl,
        youtubeUrl = _a.youtubeUrl,
        instagramUrl = _a.instagramUrl,
        contacts = _a.contacts;
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

      var firstBottomNav = 'firstBottom';
      var firstBottomNavItems = transformedNavigations && transformedNavigations[firstBottomNav] ? transformedNavigations[firstBottomNav] : [];
      var secondBottomNav = 'secondBottom';
      var secondBottomNavItems = transformedNavigations && transformedNavigations[secondBottomNav] ? transformedNavigations[secondBottomNav] : [];
      var thirdBottomNav = 'thirdBottom';
      var thirdBottomNavItems = transformedNavigations && transformedNavigations[thirdBottomNav] ? transformedNavigations[thirdBottomNav] : [];
      return React.createElement(React.Fragment, null, React.createElement("footer", {
        className: 'footer'
      }, React.createElement(_CookiePopup.default, null), React.createElement("div", {
        className: 'container'
      }, React.createElement("div", {
        className: 'footer__newsletter'
      }, React.createElement("h3", null, "Divesoft newsletter"), React.createElement("p", null, "Enter your e-mail to subscribe to our newsletter!"), React.createElement("form", {
        action: "#"
      }, React.createElement("input", {
        type: "email"
      }), React.createElement("button", {
        className: 'btn'
      }, "OK"))), React.createElement("div", {
        className: 'footer__divider'
      }), React.createElement("div", {
        className: 'footer__navigation row d-flex justify-content-between align-items-start'
      }, React.createElement("nav", {
        className: 'footer__navigation__item col-12 col-md-6 col-xl'
      }, React.createElement("h6", {
        className: "headline"
      }, "All about buying"), React.createElement("ul", null, firstBottomNavItems && firstBottomNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, __assign({}, navItem.url), navItem.name || navItem.title));
      }))), React.createElement("nav", {
        className: 'footer__navigation__item col-12 col-md-6 col-xl'
      }, React.createElement("h6", {
        className: "headline"
      }, "Support"), React.createElement("ul", null, secondBottomNavItems && secondBottomNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, __assign({}, navItem.url), navItem.name || navItem.title));
      }))), React.createElement("nav", {
        className: 'footer__navigation__item col-12 col-md-6 col-xl'
      }, React.createElement("h6", {
        className: "headline"
      }, "Dealers"), React.createElement("ul", null, thirdBottomNavItems && thirdBottomNavItems.map(function (navItem, i) {
        return React.createElement("li", {
          key: i
        }, React.createElement(_Link.default, __assign({}, navItem.url), navItem.name || navItem.title));
      }))), React.createElement("div", {
        className: 'footer__navigation__contacts col-12 col-md-6 col-xl'
      }, React.createElement("h6", {
        className: "headline"
      }, "Contact"), contacts && React.createElement(_reactMarkdown.default, {
        source: contacts
      }))), React.createElement("div", {
        className: 'footer__bottom row'
      }, React.createElement("div", {
        className: 'col'
      }, React.createElement("div", {
        className: 'footer__bottom__social d-flex justify-content-center'
      }, React.createElement(_Link.default, __assign({}, facebookUrl), React.createElement("div", null)), React.createElement(_Link.default, __assign({}, youtubeUrl), React.createElement("div", null)), React.createElement(_Link.default, __assign({}, instagramUrl), React.createElement("div", null))), copyrights && React.createElement("p", null, copyrights))))));
    });
  };

  Footer.prototype.transformNavigationsIntoTree = function (navigation, urls) {
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

  Footer.prototype.buildNavTree = function (nav, parent, urls) {
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

  return Footer;
}(React.Component);

var _default = Footer;
exports.default = _default;
var templateObject_1, templateObject_2;