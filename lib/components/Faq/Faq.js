"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _FaqItem = _interopRequireDefault(require("./components/FaqItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Faq = function Faq(props) {
  var _a = props.data,
      paddingTop = _a.paddingTop,
      title = _a.title,
      text = _a.text,
      questions = _a.questions;
  return _react.default.createElement(_List.default, {
    data: questions
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'faq'
    }, _react.default.createElement("div", {
      className: "container"
    }, text && _react.default.createElement("h4", {
      style: paddingTop ? {
        paddingTop: 0
      } : {},
      className: 'faq__text'
    }, text), _react.default.createElement("div", {
      className: "row faq__list"
    }, _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
      className: "col-12 col-md-9"
    }, data && data.map(function (item, i) {
      return _react.default.createElement(_FaqItem.default, {
        key: i,
        title: item.title,
        text: item.text
      });
    })))));
  });
};

var _default = Faq;
exports.default = _default;