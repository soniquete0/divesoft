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
var ListOfLinks = function (props) { return (React.createElement(List, { data: props.data.links }, function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: 'listOfLinks' },
        React.createElement("div", { className: "container" }, data && data.map(function (item, i) { return React.createElement(Link, __assign({ key: i }, item.url), item.title); }))));
})); };
export default ListOfLinks;
//# sourceMappingURL=ListOfLinks.js.map