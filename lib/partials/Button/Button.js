"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Button = function Button(props) {
  // Button with link
  if (props.url) {
    return React.createElement(_Link.default, {
      className: "btn " + props.classes,
      url: props.url && props.url.url
    }, props.children);
  } else {
    return (// button with no link
      React.createElement("button", {
        className: "btn " + props.classes
      }, props.children)
    );
  }
};

var _default = Button;
exports.default = _default;