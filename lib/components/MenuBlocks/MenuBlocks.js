"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var MenuBlocks = function MenuBlocks(props) {
  var menuBlocks = props.data.menuBlocks;
  return React.createElement(_List.default, {
    data: menuBlocks
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: 'menu-blocks grid'
    }, data && data.map(function (block, i) {
      return React.createElement(_Link.default, {
        key: i,
        url: block.url && block.url.url,
        className: 'menu-blocks__item',
        style: {
          backgroundImage: block.image && "url(" + (0, _getImageUrl.default)(block.image) + ")"
        }
      }, block.icon && React.createElement(_Media.default, {
        type: 'image',
        data: block.icon
      }), React.createElement("p", null, block.title && block.title), React.createElement("div", {
        className: 'menu-blocks__item__colorGradient',
        style: {
          background: "linear-gradient(40deg, " + (block.color && block.color || '#3eac49') + " 0%, \n                        transparent 100%)"
        }
      }));
    })));
  });
};

var _default = MenuBlocks;
exports.default = _default;