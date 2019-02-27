"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InfoRectangles = function InfoRectangles(props) {
  var infoRectangles = props.data.infoRectangles;
  return React.createElement(_List.default, {
    data: infoRectangles
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: 'info-rectangles'
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: 'info-rectangles__divider'
    }), React.createElement("div", {
      className: 'info-rectangles__list grid'
    }, data && data.map(function (rectangle, i) {
      return React.createElement(_Link.default, {
        key: i,
        url: rectangle.url && rectangle.url.url,
        className: 'info-rectangles__list__item',
        style: {
          backgroundImage: rectangle.image && "url(" + (0, _getImageUrl.default)(rectangle.image) + ")"
        }
      }, React.createElement("div", {
        className: 'info-rectangles__list__item__content'
      }, rectangle.icon && React.createElement(_Media.default, {
        type: 'image',
        data: rectangle.icon
      }), rectangle.title && React.createElement("p", {
        style: rectangle.titleColor && {
          color: "" + rectangle.titleColor
        } || {}
      }, rectangle.title)), rectangle.gradientColor && React.createElement("div", {
        className: 'info-rectangles__list__item--colorGradient',
        style: {
          background: "linear-gradient(to left, rgba(125, 185, 232, 0) 0%, \n                          " + rectangle.gradientColor + " 100%)"
        }
      }));
    }))));
  });
};

var _default = InfoRectangles;
exports.default = _default;