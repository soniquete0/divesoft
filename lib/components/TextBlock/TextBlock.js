"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TextBlock = function TextBlock(props) {
  var _a = props.data,
      title = _a.title,
      text = _a.text;
  return React.createElement("section", {
    className: 'textBlock'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'textBlock__container'
  }, title && React.createElement("h3", {
    className: 'gradientHeading'
  }, title), text && React.createElement("div", {
    className: "textBlock__container__text"
  }, React.createElement(_reactMarkdown.default, {
    source: text,
    renderers: {
      // tslint:disable-next-line:no-any
      paragraph: function paragraph(rProps) {
        return React.createElement(React.Fragment, null, rProps.children);
      }
    }
  })))));
};

var _default = TextBlock;
exports.default = _default;