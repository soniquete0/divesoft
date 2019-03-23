"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Hero = function Hero(props) {
  var _a = props.data,
      url = _a.url,
      text = _a.text,
      image = _a.image,
      title = _a.title,
      btnTitle = _a.btnTitle,
      paddingTop = _a.paddingTop,
      smallFontSize = _a.smallFontSize;
  return React.createElement("div", {
    className: paddingTop ? 'topWrapper' : ''
  }, React.createElement("div", {
    className: 'hero',
    style: {
      backgroundImage: image && "url(" + (0, _getImageUrl.default)(image) + ")"
    }
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'hero__content'
  }, title && !smallFontSize && React.createElement("h1", null, title), title && smallFontSize && React.createElement("h2", null, title), React.createElement("p", {
    className: 'textDescription'
  }, text), btnTitle && React.createElement(_Button.default, {
    url: url
  }, btnTitle)))));
};

var _default = Hero;
exports.default = _default;