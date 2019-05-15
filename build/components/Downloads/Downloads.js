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
var List_1 = require("../List");
var Link_1 = require("@source/partials/Link");
var Media_1 = require("@source/partials/Media");
var Downloads = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, files = _a.files;
    return (React.createElement("div", { className: 'downloads' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h2", { className: 'downloads__title' }, title),
            description && React.createElement("p", { className: 'textDescription' }, description),
            React.createElement("div", { className: "downloads__list row" },
                React.createElement(List_1.default, { data: files }, function (_a) {
                    var data = _a.data;
                    return data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-md-4 downloads__list__item' },
                        React.createElement(Media_1.default, { type: 'image', data: item.img }),
                        item.title && React.createElement("h4", null, item.title),
                        item.url && item.urlText && React.createElement(Link_1.default, __assign({}, item.url), item.urlText))); });
                })))));
};
exports.default = Downloads;
//# sourceMappingURL=Downloads.js.map