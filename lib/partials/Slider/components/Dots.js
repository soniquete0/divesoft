"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DotsProps = function DotsProps(props) {
  if (props.len <= 0) {
    return;
  }

  var dots = [];

  var _loop_1 = function _loop_1(i) {
    dots.push(_react.default.createElement("i", {
      key: i,
      className: "slider__dots__dot " + (props.currentIndex === i ? "slider__dots__dot--active" : ''),
      onClick: function onClick() {
        return props.goTo(i);
      }
    }));
  };

  for (var i = 0; i < props.len; i++) {
    _loop_1(i);
  }

  return _react.default.createElement("div", {
    className: "slider__dots"
  }, dots);
};

var _default = DotsProps;
exports.default = _default;