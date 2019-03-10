"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutRightPicture = function AboutRightPicture(props) {
  var _a = props.data,
      title = _a.title,
      subtitle = _a.subtitle,
      text = _a.text,
      img = _a.img;
  return _react.default.createElement("div", {
    className: 'aboutRightPicture'
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 col-lg-6"
  }, _react.default.createElement("div", {
    className: 'aboutRightPicture__content'
  }, title && _react.default.createElement("h2", null, title), subtitle && _react.default.createElement("h4", null, subtitle), text && _react.default.createElement(_reactMarkdown.default, {
    source: text
  }))), _react.default.createElement("div", {
    className: "col-12 col-lg-6"
  }, img && _react.default.createElement(_Media.default, {
    type: 'image',
    data: img
  })))));
};

var _default = AboutRightPicture;
exports.default = _default;