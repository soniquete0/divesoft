"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DotsProps = function (props) {
    if (props.len <= 0) {
        return;
    }
    var dots = [];
    var _loop_1 = function (i) {
        dots.push(React.createElement("i", { key: i, className: "slider__dots__dot " + (props.currentIndex === i ? "slider__dots__dot--active" : ''), onClick: function () { return props.goTo(i); } }));
    };
    for (var i = 0; i < props.len; i++) {
        _loop_1(i);
    }
    return (React.createElement("div", { className: "slider__dots" }, dots));
};
exports.default = DotsProps;
//# sourceMappingURL=Dots.js.map