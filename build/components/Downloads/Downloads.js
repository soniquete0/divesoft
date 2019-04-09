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
import React from 'react';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
var Downloads = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, files = _a.files;
    return (React.createElement("div", { className: 'downloads' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h2", { className: 'downloads__title' }, title),
            description && React.createElement("p", { className: 'textDescription' }, description),
            React.createElement("div", { className: "downloads__list row" },
                React.createElement(List, { data: files }, function (_a) {
                    var data = _a.data;
                    return data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-md-4 downloads__list__item' },
                        React.createElement(Media, { type: 'image', data: item.img }),
                        item.title && React.createElement("h4", null, item.title),
                        item.url && item.urlText && React.createElement(Link, __assign({}, item.url), item.urlText))); });
                })))));
};
export default Downloads;
//# sourceMappingURL=Downloads.js.map