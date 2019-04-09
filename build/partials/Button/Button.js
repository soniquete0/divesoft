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
import * as React from 'react';
import Link from '../Link';
var Button = function (props) {
    // Button with link
    if (props.url) {
        return (React.createElement(Link, __assign({ className: "btn " + props.classes }, props.url), props.children));
    }
    else {
        return (
        // button with no link
        React.createElement("button", { className: "btn " + props.classes }, props.children));
    }
};
export default Button;
//# sourceMappingURL=Button.js.map