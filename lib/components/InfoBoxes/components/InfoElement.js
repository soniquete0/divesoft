"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoElement;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../../lib/helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function InfoElement(props) {
  var title = props.title,
      image = props.image,
      url = props.url;
  return React.createElement("a", {
    className: 'info-boxes__list__element',
    style: {
      backgroundImage: image && "url(" + (0, _getImageUrl.default)(image) + ")"
    }
  }, React.createElement("div", {
    className: 'fullWidthContainer info-boxes__list__element__content'
  }, title && React.createElement("h5", null, title), React.createElement(_Button.default, {
    url: url,
    classes: 'btn--fullWidth btn--greenBkg'
  }, "vice info")), React.createElement("div", {
    className: 'info-boxes__list__element--colorGradient',
    style: {
      background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, white 100%)"
    }
  }));
}