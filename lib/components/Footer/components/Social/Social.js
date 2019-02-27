"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../../../../lib/partials/SvgIcon"));

var _Link = _interopRequireDefault(require("../../../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Social = function Social(props) {
  var icons = props.icons;
  return React.createElement("div", {
    className: 'social'
  }, icons && icons.map(function (icon, i) {
    return React.createElement(_Link.default, {
      key: i,
      url: icon.url && icon.url.url
    }, React.createElement(_SvgIcon.default, {
      type: 'white',
      name: icon.title && icon.title
    }));
  }));
};

var _default = Social;
exports.default = _default;