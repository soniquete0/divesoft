"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var RegistrationBlock = function RegistrationBlock(props) {
  var _a = props.data,
      title = _a.title,
      text = _a.text,
      btnTitle = _a.btnTitle,
      btnUrl = _a.btnUrl,
      conditionsUrl = _a.conditionsUrl;
  return React.createElement("div", {
    className: 'registration-block'
  }, React.createElement("div", {
    className: "container"
  }, title && React.createElement("h3", null, title), text && React.createElement(_reactMarkdown.default, {
    source: text
  }), btnTitle && React.createElement("div", {
    className: 'registration-block__btn-holder'
  }, React.createElement(_Button.default, {
    url: btnUrl,
    classes: 'btn--greenBkg hCenterBlock'
  }, btnTitle)), conditionsUrl && React.createElement(_Link.default, {
    className: 'registration-block__conditions',
    url: conditionsUrl && conditionsUrl.url
  }, "V\u0161eobecn\xE9 obchodn\xED podm\xEDnky")));
};

var _default = RegistrationBlock;
exports.default = _default;