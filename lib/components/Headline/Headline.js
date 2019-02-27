"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Headline = function Headline(props) {
  var _a = props.data,
      title = _a.title,
      displayOnTop = _a.displayOnTop;
  return React.createElement("div", {
    className: 'headline',
    style: displayOnTop ? {
      paddingTop: 170
    } : {}
  }, title && React.createElement("h3", null, title));
};

var _default = Headline;
exports.default = _default;