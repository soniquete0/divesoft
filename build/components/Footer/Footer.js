"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var graphql_tag_1 = require("graphql-tag");
var react_adopt_1 = require("react-adopt");
var react_apollo_1 = require("react-apollo");
var ReactMarkdown = require("react-markdown");
var Link_1 = require("../../partials/Link");
var Loader_1 = require("../../partials/Loader");
var CookiePopup_1 = require("./components/CookiePopup");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var GET_PAGES_URLS = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!, $websiteId: ID!) {\n    pagesUrls(where: { language: $language, websiteId: $websiteId }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
var ComposedQuery = react_adopt_1.adopt({
    context: function (_a) {
        var render = _a.render;
        return React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        });
    },
    getPagesUrls: function (_a) {
        var render = _a.render, _b = _a.context, languageData = _b.languageData, websiteData = _b.websiteData;
        if (!(languageData && websiteData)) {
            return render({});
        }
        return (React.createElement(react_apollo_1.Query, { query: GET_PAGES_URLS, variables: { language: languageData.id, websiteId: websiteData.id } }, function (data) {
            return render(data);
        }));
    },
});
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        return _super.call(this, props) || this;
    }
    Footer.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, copyrights = _a.copyrights, contacts = _a.contacts, facebookUrl = _a.facebookUrl, youtubeUrl = _a.youtubeUrl, instagramUrl = _a.instagramUrl;
        return (React.createElement(ComposedQuery, null, function (_a) {
            var _b = _a.getPagesUrls, loading = _b.loading, error = _b.error, data = _b.data, context = _a.context;
            if (!context.navigationsData ||
                !context.languageData ||
                !context.languagesData ||
                !data ||
                !data.pagesUrls) {
                return React.createElement(Loader_1.default, null);
            }
            if (error) {
                return "Error..." + error;
            }
            var navigations = context.navigationsData, languageCode = context.languageData.code;
            var transformedNavigations = _this.transformNavigationsIntoTree(navigations, data.pagesUrls);
            var firstBottomNav = 'firstBottom';
            var firstBottomNavItems = transformedNavigations && transformedNavigations[firstBottomNav] ?
                transformedNavigations[firstBottomNav] :
                [];
            var secondBottomNav = 'secondBottom';
            var secondBottomNavItems = transformedNavigations && transformedNavigations[secondBottomNav] ?
                transformedNavigations[secondBottomNav] :
                [];
            var thirdBottomNav = 'thirdBottom';
            var thirdBottomNavItems = transformedNavigations && transformedNavigations[thirdBottomNav] ?
                transformedNavigations[thirdBottomNav] :
                [];
            return (React.createElement(React.Fragment, null,
                React.createElement("footer", { className: 'footer' },
                    React.createElement(CookiePopup_1.default, null),
                    React.createElement("div", { className: 'container' },
                        React.createElement("div", { className: 'footer__newsletter' },
                            React.createElement("h3", null, "Divesoft newsletter"),
                            React.createElement("p", null, "Enter your e-mail to subscribe to our newsletter!"),
                            React.createElement("form", { action: "#" },
                                React.createElement("input", { type: "email" }),
                                React.createElement("button", { className: 'btn' }, "OK"))),
                        React.createElement("div", { className: 'footer__divider' }),
                        React.createElement("div", { className: 'footer__navigation row d-flex justify-content-between align-items-start' },
                            React.createElement("nav", { className: 'footer__navigation__item col-12 col-md-6 col-xl' },
                                React.createElement("h6", { className: "headline" }, "About"),
                                React.createElement("ul", null, firstBottomNavItems &&
                                    firstBottomNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                        React.createElement(Link_1.default, __assign({}, navItem.url), navItem.name || navItem.title))); }))),
                            React.createElement("nav", { className: 'footer__navigation__item col-12 col-md-6 col-xl' },
                                React.createElement("h6", { className: "headline" }, "Support"),
                                React.createElement("ul", null, secondBottomNavItems &&
                                    secondBottomNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                        React.createElement(Link_1.default, __assign({}, navItem.url), navItem.name || navItem.title))); }))),
                            React.createElement("nav", { className: 'footer__navigation__item col-12 col-md-6 col-xl' },
                                React.createElement("h6", { className: "headline" }, "Dealers"),
                                React.createElement("ul", null, thirdBottomNavItems &&
                                    thirdBottomNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                        React.createElement(Link_1.default, __assign({}, navItem.url), navItem.name || navItem.title))); }))),
                            React.createElement("div", { className: 'footer__navigation__contacts col-12 col-md-6 col-xl' },
                                React.createElement("h6", { className: "headline" }, "Contact"),
                                contacts && React.createElement(ReactMarkdown, { source: contacts }))),
                        React.createElement("div", { className: 'footer__divider' }),
                        React.createElement("div", { className: 'footer__bottom row' },
                            React.createElement("div", { className: 'col-12 col-md-6 col-xl' }, copyrights && React.createElement("p", { className: 'text-copyright' }, copyrights)),
                            React.createElement("div", { className: 'col-12 col-md-6 col-xl' },
                                React.createElement("div", { className: 'footer__bottom__social d-flex' },
                                    React.createElement(Link_1.default, __assign({}, facebookUrl, { className: "facebook" }),
                                        React.createElement("div", null)),
                                    React.createElement(Link_1.default, __assign({}, youtubeUrl, { className: "youtube" }),
                                        React.createElement("div", null)),
                                    React.createElement(Link_1.default, __assign({}, instagramUrl, { className: "instagram" }),
                                        React.createElement("div", null)))))))));
        }));
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
                var url = urls.find(function (u) { return u.page === node.page; });
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
                    pageId: item.id,
                };
                res.push(item);
            }
        });
        res.sort(function (a, b) { return a.order - b.order; });
        return res;
    };
    return Footer;
}(React.Component));
exports.default = Footer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Footer.js.map