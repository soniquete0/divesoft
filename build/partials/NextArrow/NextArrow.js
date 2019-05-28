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
function NextArrow(props) {
    var className = props.className, style = props.style, classes = props.classes, onClick = props.onClick;
    return (React.createElement("div", { onClick: onClick, style: __assign({}, style), className: className + " nextArrow " + classes },
        React.createElement("div", { className: "nextArrow--top" }),
        React.createElement("div", { className: "nextArrow--bottom" })));
}
exports.default = NextArrow;
//# sourceMappingURL=NextArrow.js.map