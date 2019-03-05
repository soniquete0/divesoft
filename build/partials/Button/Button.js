import * as React from 'react';
import Link from '../Link';
var Button = function (props) {
    // Button with link
    if (props.url) {
        return (React.createElement(Link, { className: "btn " + props.classes, url: props.url && props.url.url },
            props.children,
            !props.noArrow && React.createElement("span", { className: "arrow" })));
    }
    else {
        return (
        // button with no link
        React.createElement("button", { className: "btn " + props.classes },
            props.children,
            !props.noArrow && React.createElement("span", { className: "arrow" })));
    }
};
export default Button;
//# sourceMappingURL=Button.js.map