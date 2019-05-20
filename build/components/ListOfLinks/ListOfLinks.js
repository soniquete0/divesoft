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
var ListOfLinks = function (props) { return (React.createElement(List_1.default, { data: props.data.links }, function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: 'listOfLinks' },
        React.createElement("div", { className: "container" }, data && data.map(function (item, i) { return React.createElement(Link_1.default, __assign({ key: i }, item.url), item.title); }))));
})); };
exports.default = ListOfLinks;
//# sourceMappingURL=ListOfLinks.js.map