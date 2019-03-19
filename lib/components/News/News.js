"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var News = function News(props) {
  var _a = props.data,
      title = _a.title,
      shareUrl = _a.shareUrl,
      firstText = _a.firstText,
      firstImg = _a.firstImg,
      secondText = _a.secondText,
      secondImg = _a.secondImg,
      thirdImg = _a.thirdImg,
      thirdText = _a.thirdText,
      buttonUrl = _a.buttonUrl;
  return _react.default.createElement("div", {
    className: 'news'
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 col-md-9"
  }, title && _react.default.createElement("h4", {
    className: 'news__title'
  }, title)), _react.default.createElement("div", {
    className: "col-12 col-md-3"
  }, shareUrl && _react.default.createElement("div", {
    className: 'news__btnHolder'
  }, _react.default.createElement(_Button.default, {
    url: shareUrl,
    classes: 'btn--bordered news__btnHolder__share'
  }, "Share")))), _react.default.createElement("div", {
    className: 'news__divider'
  }), firstText && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 news__text"
  }, firstText && _react.default.createElement(_reactMarkdown.default, {
    source: firstText
  }))), firstImg && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12"
  }, _react.default.createElement(_Media.default, {
    type: 'image',
    data: firstImg,
    class: 'news__firstImg'
  }))), secondText && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 news__text"
  }, _react.default.createElement(_reactMarkdown.default, {
    source: secondText
  }))), _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 col-md-6"
  }, secondImg && _react.default.createElement(_Media.default, {
    class: 'news__secondImg',
    type: 'image',
    data: secondImg
  })), _react.default.createElement("div", {
    className: "col-12 col-md-6"
  }, thirdImg && _react.default.createElement(_Media.default, {
    class: 'news__thirdImg',
    type: 'image',
    data: thirdImg
  }))), thirdText && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 news__text"
  }, _react.default.createElement(_reactMarkdown.default, {
    source: thirdText
  }))), buttonUrl && _react.default.createElement(_Button.default, {
    classes: 'news__btn btn--center',
    url: buttonUrl
  }, "All news & events")));
};

var _default = News;
exports.default = _default;