"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Title = function Title(props) {
  return React.createElement("div", {
    className: 'pcTitle'
  }, React.createElement("img", {
    src: "/assets/divesoft/images/logo.svg",
    alt: "Medicon Logo"
  }), React.createElement("div", {
    className: 'pcTitle__title'
  }, React.createElement("h3", null, "Pharmacentrum"), React.createElement("div", {
    className: 'pcTitle__title__subtitle'
  }, React.createElement("span", null, props.name), React.createElement("span", {
    className: 'pcTitle__title__subtitle__circles'
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null)))));
};

var _default = Title;
exports.default = _default;