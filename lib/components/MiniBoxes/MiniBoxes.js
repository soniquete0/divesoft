"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var MiniBoxes = function MiniBoxes(props) {
  var _a = props.data,
      title = _a.title,
      dividerOnTop = _a.dividerOnTop,
      miniBoxes = _a.miniBoxes;
  return React.createElement(_List.default, {
    data: miniBoxes
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'mini-boxes'
    }, React.createElement("div", {
      className: "container"
    }, dividerOnTop ? React.createElement("div", {
      className: 'mini-boxes__divider'
    }) : '', title && React.createElement("h3", null, title), React.createElement("div", {
      className: 'mini-boxes__list grid'
    }, data && data.map(function (box, i) {
      return React.createElement(_Link.default, {
        key: i,
        url: box.url && box.url.url,
        className: 'mini-boxes__list__item',
        style: {
          backgroundImage: box.image && "url(" + (0, _getImageUrl.default)(box.image) + ")"
        }
      }, box.title && React.createElement("p", null, box.title), React.createElement("div", {
        className: 'mini-boxes__list__item--colorGradient',
        style: {
          background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, \n                        " + box.gradientColor + " 100%)"
        }
      }));
    }))));
  });
};

var _default = MiniBoxes;
exports.default = _default;