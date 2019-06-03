"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Marker(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "marker", onClick: function () { return props.onClick(); } })));
}
exports.default = Marker;
//# sourceMappingURL=Marker.js.map