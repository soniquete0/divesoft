"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReviewElement;

var React = _interopRequireWildcard(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../../../lib/partials/SvgIcon"));

var _Media = _interopRequireDefault(require("../../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ReviewElement(props) {
  var image = props.image,
      cite = props.cite,
      starCount = props.starCount;
  var rows = [];

  for (var i = 0; i < starCount; i++) {
    rows.push(React.createElement(_SvgIcon.default, {
      name: "star",
      key: i
    }));
  } // 5 stars by default


  if (starCount < 5) {
    rows.slice(-(5 - starCount), starCount);
  }

  return React.createElement("div", {
    className: 'reviews__list__element'
  }, image && React.createElement(_Media.default, {
    type: 'image',
    data: image
  }), React.createElement("div", {
    className: 'reviews__list__element__content'
  }, cite && React.createElement("cite", null, cite), rows && React.createElement("div", {
    className: 'stars'
  }, rows)));
}