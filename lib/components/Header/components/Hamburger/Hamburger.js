"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Hamburger = function Hamburger(props) {
  return React.createElement("div", {
    className: "hamburgerHolder " + (props.active ? 'active' : ''),
    onClick: function onClick() {
      return props.onClick();
    }
  }, React.createElement("div", {
    className: "hamburger"
  }, React.createElement("div", null)), React.createElement("div", {
    className: "hamburgerActive"
  }, React.createElement("div", null)));
};

var _default = Hamburger;
exports.default = _default;