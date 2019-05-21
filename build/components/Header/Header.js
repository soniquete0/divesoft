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
var react_apollo_1 = require("react-apollo");
var react_adopt_1 = require("react-adopt");
var Search_1 = require("../Search");
var Link_1 = require("@source/partials/Link");
var Media_1 = require("@source/partials/Media");
var Loader_1 = require("@source/partials/Loader");
var Hamburger_1 = require("./components/Hamburger");
// import Country from './components/Country/Country';
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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.closeMenu = function () {
            _this.setState({
                menuActive: false,
            });
        };
        _this.toggleMenu = function () {
            _this.setState({
                menuActive: !_this.state.menuActive,
            });
        };
        _this.toggleDropdown = function () { return _this.setState({ showDropdown: !_this.state.showDropdown }); };
        _this.hideSubMenu = function () {
            _this.setState({ subMenuVisible: '' });
        };
        _this.submenuVisibility = function (cat) {
            _this.setState({ subMenuVisible: cat.name });
        };
        _this.canToggle = function (item) {
            return (item.children || item.name === 'products') ? '#' : item.url.url;
        };
        _this.state = {
            menuActive: false,
            showDropdown: false,
            visibleProductsSubMenu: false,
            subMenuVisible: '',
            showSearch: false,
            searchQuery: ''
        };
        return _this;
    }
    Header.prototype.render = function () {
        var _this = this;
        this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');
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
            var topNav = 'top';
            var topNavItems = transformedNavigations && transformedNavigations[topNav] ? transformedNavigations[topNav] : [];
            var products = _this.props.data.products;
            return (React.createElement(React.Fragment, null,
                React.createElement("header", { className: "header", style: _this.state.menuActive ?
                        { overflow: 'inherit' } :
                        { overflow: 'hidden' } },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: 'header__wrapper d-flex justify-content-between align-items-center' },
                            React.createElement(Hamburger_1.default, { active: _this.state.menuActive, onClick: _this.toggleMenu }),
                            React.createElement("div", { className: "header__logo" },
                                React.createElement(Link_1.default, { url: (context.websiteData.urlMask === '/' ?
                                        '' : context.websiteData.urlMask) + "/" + context.languageData.code },
                                    React.createElement("img", { src: "/assets/divesoft/images/logo.svg", alt: "logo" }))),
                            React.createElement("nav", null,
                                React.createElement("ul", null, topNavItems && topNavItems.map(function (navItem, i) {
                                    return (React.createElement("li", { key: i, style: { position: 'relative' } },
                                        React.createElement(Link_1.default, __assign({}, navItem.url, { url: _this.canToggle(navItem), onMouseEnter: function () { return _this.submenuVisibility(navItem); } }),
                                            React.createElement("span", { className: "d-flex no-wrap" },
                                                navItem.name || navItem.title,
                                                (navItem.name === 'products' || navItem.children) ?
                                                    React.createElement("span", { onClick: function () { return _this.toggleDropdown(); }, className: 'dropdown__arrow' }) : '')),
                                        navItem.name === _this.state.subMenuVisible &&
                                            navItem.children ?
                                            // tslint:disable-next-line: max-line-length
                                            React.createElement("div", { className: "categoriesSubmenu_wrapper", key: navItem.id, onMouseLeave: _this.hideSubMenu },
                                                React.createElement("nav", { className: "categoriesSubmenu" },
                                                    React.createElement("ul", { className: "categoriesSubmenu_list" }, navItem.children.map(function (navItemChild) {
                                                        // tslint:disable-next-line: max-line-length
                                                        return React.createElement(Link_1.default, __assign({}, navItemChild.url, { className: "categoriesSubmenu_link", key: navItemChild.id }), navItemChild.name);
                                                    }))))
                                            : ''));
                                }))),
                            React.createElement("div", { className: 'header__controls d-flex justify-content-between align-items-center' },
                                React.createElement("img", { onClick: function () { return _this.setState({ showSearch: !_this.state.showSearch }); }, src: "/assets/divesoft/images/search.svg", alt: "search", className: "header-ico header-ico_search", style: { cursor: 'pointer' } }),
                                _this.state.showSearch ?
                                    React.createElement(Search_1.default, { language: context.languageData.code }) : '',
                                React.createElement("a", { href: "http://93.185.96.70:3010/cz/login", className: "login-link" },
                                    React.createElement("img", { src: "/assets/divesoft/images/user.svg", alt: "account", className: "header-ico header-ico_user" })),
                                React.createElement("a", { href: "http://93.185.96.70:3010/", className: 'btn btn_eshop cart-ico' },
                                    React.createElement("span", { className: "text" }, "e-shop"))))),
                    React.createElement("div", { className: "hiddenMenu " + (_this.state.menuActive ? 'hiddenMenu--active' : '') },
                        React.createElement("div", { className: 'hiddenMenu__wrapper' },
                            React.createElement("ul", null, topNavItems &&
                                topNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i }, React.createElement(Link_1.default, __assign({}, navItem.url, { onClick: function () { return _this.closeMenu(); } }), navItem.name || navItem.title))); }))))),
                _this.state.subMenuVisible === 'products' ?
                    React.createElement("div", { className: "dropdownProducts", onMouseLeave: _this.hideSubMenu }, products && React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "row productsPreview__list" }, products.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-lg-6 col-xl-3' },
                            React.createElement("div", { className: 'productsPreview__list__item' },
                                React.createElement(Media_1.default, { type: 'image', data: item.img }),
                                item.title && React.createElement("h5", null, item.title),
                                item.description && React.createElement("p", null, item.description),
                                React.createElement(Link_1.default, __assign({}, item.url, { onClick: _this.hideSubMenu, className: "btn" }), "Detail")))); })))) : ''));
        }));
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
    return Header;
}(React.Component));
exports.default = Header;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Header.js.map