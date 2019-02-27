"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoElement;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../../lib/helpers/getImageUrl"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function InfoElement(props) {
  var title = props.title,
      gradientColor = props.gradientColor,
      image = props.image,
      button = props.button,
      titleColor = props.titleColor,
      link = props.link;
  return React.createElement(_Link.default, {
    url: link && link.url,
    className: 'custom-info-boxes__list__element',
    style: {
      backgroundImage: image && "url(" + (0, _getImageUrl.default)(image) + ")"
    }
  }, React.createElement("div", {
    className: 'fullWidthContainer custom-info-boxes__list__element__content'
  }, titleColor && title && React.createElement("h5", {
    style: {
      color: "" + titleColor
    }
  }, title), button && React.createElement(_Button.default, {
    classes: 'btn--fullWidth ' + button
  }, "vice info")), gradientColor && React.createElement("div", {
    className: 'custom-info-boxes__list__element--colorGradient',
    style: {
      background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)"
    }
  }));
}