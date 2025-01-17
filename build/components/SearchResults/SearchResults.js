"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_router_dom_1 = require("react-router-dom");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var react_adopt_1 = require("react-adopt");
var GET_CONTENT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query($languageCode: String) {\n    pages(where: { website: { id: \"", "\" }}) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { code: $languageCode } }) {\n        id\n        name\n        content\n        language {\n          code\n        }\n      }\n    }\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query($languageCode: String) {\n    pages(where: { website: { id: \"", "\" }}) {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { code: $languageCode } }) {\n        id\n        name\n        content\n        language {\n          code\n        }\n      }\n    }\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])), process.env.REACT_APP_WEBSITE_ID);
var GET_CONTEXT = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n{\n  pageData @client\n  languageData @client\n}\n"], ["\n{\n  pageData @client\n  languageData @client\n}\n"])));
var GET_ALL_PAGES = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query pages($languageId: ID!) {\n    pages {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query pages($languageId: ID!) {\n    pages {\n      id\n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"])));
var GET_PAGE = graphql_tag_1.default(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query($pageId: ID!) {\n    page(where: { id: $pageId }) {\n      id\n      tags {\n        id\n        name\n      }\n    }\n  }\n"], ["\n  query($pageId: ID!) {\n    page(where: { id: $pageId }) {\n      id\n      tags {\n        id\n        name\n      }\n    }\n  }\n"])));
var GET_PAGES_URLS = graphql_tag_1.default(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
var ComposedQuery = react_adopt_1.adopt({
    getContext: function (_a) {
        var render = _a.render;
        return (React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        }));
    },
    pagesUrls: function (_a) {
        var render = _a.render, languageData = _a.getContext.languageData;
        if (!languageData) {
            return render({ loading: true });
        }
        return (React.createElement(react_apollo_1.Query, { query: GET_PAGES_URLS, variables: { language: languageData.id } }, function (data) {
            return render(data);
        }));
    },
    allPages: function (_a) {
        var render = _a.render, languageData = _a.getContext.languageData;
        if (!languageData) {
            return render({ loading: true });
        }
        return (React.createElement("div", null,
            React.createElement(react_apollo_1.Query, { query: GET_ALL_PAGES, variables: { languageId: languageData.id } }, function (data) {
                return render(data);
            })));
    },
    currentPage: function (_a) {
        var render = _a.render, pageData = _a.getContext.pageData;
        return (React.createElement(react_apollo_1.Query, { query: GET_PAGE, variables: { pageId: pageData.id } }, function (data) {
            return render(data);
        }));
    },
});
var SearchResults = function (props) {
    var active = props.active, searchQuery = props.searchQuery, handleSearch = props.handleSearch, languageCode = props.languageCode, handleSearchShow = props.handleSearchShow;
    return (React.createElement("div", { className: "searchResults " + (active ? 'searchResults--active ' : '') + " " },
        React.createElement(ComposedQuery, null, function (_a) {
            var _b = _a.pagesUrls, pagesUrlsData = _b.data, pagesUrlsError = _b.error, pagesUrlsLoading = _b.loading, _c = _a.allPages, allPagesData = _c.data, allPagesError = _c.error, allPagesLoading = _c.loading;
            if (pagesUrlsLoading || allPagesLoading) {
                return (React.createElement("div", { className: "searchResult__loading" }, "Loading.."));
            }
            if (pagesUrlsError || allPagesError) {
                return React.createElement("div", { className: "searchResults__error" }, "There was an error fetching results!.");
            }
            var pagesUrls = pagesUrlsData.pagesUrls;
            var pages = allPagesData.pages;
            var filteredPages = (pages || [])
                .filter(function (page) {
                return JSON.stringify(page)
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            })
                .map(function (p) {
                var pageUrlObj = pagesUrls.find(function (pUrl) { return pUrl.page === p.id; });
                return __assign({}, p, (pageUrlObj ? { url: pageUrlObj.url } : {}));
            });
            return (React.createElement("div", { className: 'searchResults__holder container' },
                React.createElement("ul", null, filteredPages && filteredPages.length > 0 &&
                    filteredPages.map(function (page, index) { return (React.createElement("li", { key: index }, page.url && (React.createElement(react_router_dom_1.Link, { to: page.url, onClick: function () { handleSearch(''); handleSearchShow(); } }, page.translations[0].name)))); }))));
        })));
};
exports.default = SearchResults;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=SearchResults.js.map