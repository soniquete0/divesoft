"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsPreview = function ProductsPreview(props) {
  return _react.default.createElement(_List.default, {
    data: props.data.products
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'productsPreview'
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row productsPreview__list"
    }, data.map(function (item, i) {
      return _react.default.createElement("div", {
        key: i,
        className: 'col-12 col-lg-6 col-xl-3'
      }, _react.default.createElement("div", {
        className: 'productsPreview__list__item'
      }, _react.default.createElement(_Media.default, {
        type: 'image',
        data: item.img
      }), item.title && _react.default.createElement("h5", null, item.title), item.description && _react.default.createElement("p", null, item.description), _react.default.createElement(_Button.default, {
        url: item.url
      }, "shop now")));
    }))));
  });
};

var _default = ProductsPreview;
exports.default = _default;