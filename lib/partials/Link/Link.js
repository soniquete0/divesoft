"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactApollo = require("react-apollo");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _Loader = _interopRequireDefault(require("../Loader"));

var _reactAdopt = require("react-adopt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var isExternalLink = function isExternalLink(url) {
  var pattern = /^https?|^www|^mailto:|^tel:|^sms:|^call:|(^#$)/gi;
  return pattern.test(url);
};

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    websiteData @client\n  }\n"], ["\n  {\n    languageData @client\n    websiteData @client\n  }\n"])));
var ComposedQuery = (0, _reactAdopt.adopt)({
  context: function context(_a) {
    var render = _a.render;
    return _react.default.createElement(_reactApollo.Query, {
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
      return render({
        loading: true
      });
    }

    return _react.default.createElement(_reactApollo.Query, {
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
var GET_PAGES_URLS = (0, _graphqlTag.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));

var ComposerLink = function ComposerLink(props) {
  var children = props.children,
      urlNewWindow = props.urlNewWindow,
      url = props.url,
      pageId = props.pageId,
      dynamic = props.dynamic,
      args = __rest(props, ["children", "urlNewWindow", "url", "pageId", "dynamic"]);

  return _react.default.createElement(ComposedQuery, null, function (_a) {
    var _b = _a.getPagesUrls,
        loading = _b.loading,
        error = _b.error,
        data = _b.data;

    if (loading) {
      return _react.default.createElement(_Loader.default, null);
    }

    if (error) {
      return "Error: " + error;
    }

    var pageUrlObj;
    var pagesUrls = data.pagesUrls;

    if (pagesUrls) {
      pageUrlObj = pagesUrls.find(function (u) {
        return u.page === pageId || u.url === url;
      });
    }

    if (!pageUrlObj && !isExternalLink(url)) {
      return '';
    }

    if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
      return _react.default.createElement("a", __assign({
        href: isExternalLink(url) && url || pageUrlObj && pageUrlObj.url || '/404'
      }, args, {
        target: urlNewWindow ? '_blank' : ''
      }), children);
    } else {
      return _react.default.createElement(_reactRouterDom.Link, __assign({
        to: dynamic && url || (pageUrlObj ? pageUrlObj.url : '/404')
      }, args), children);
    }
  });
};

var _default = ComposerLink;
exports.default = _default;
var templateObject_1, templateObject_2;