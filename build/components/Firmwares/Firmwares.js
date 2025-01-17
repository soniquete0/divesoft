"use strict";
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
var ReactMarkdown = require("react-markdown");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Firmwares = function (props) {
    var _a = props.data, title = _a.title, divider = _a.divider, articles = _a.articles;
    return (React.createElement(List_1.default, { data: articles }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'firmwares' },
            React.createElement("div", { className: 'container' },
                React.createElement("h2", null, title),
                data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'firmwares__item' },
                    item.title && React.createElement("h4", null, item.title),
                    React.createElement(ReactMarkdown, { source: item.text }),
                    item.url && React.createElement(Link_1.default, __assign({}, item.url), "Download"))); }),
                divider ? React.createElement("div", { className: 'firmwares__divider' }) : '')));
    }));
};
exports.default = Firmwares;
//# sourceMappingURL=Firmwares.js.map