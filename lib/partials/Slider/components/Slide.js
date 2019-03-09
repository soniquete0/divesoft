"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(props) {
  return _react.default.createElement("div", {
    className: "slider__slide"
  }, props.slide);
};

var _default = Slide;
exports.default = _default;