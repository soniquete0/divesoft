"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsMenu = function ProductsMenu(props) {
  var _a = props.data,
      title = _a.title,
      subTitle = _a.subTitle,
      products = _a.products;
  return _react.default.createElement("div", {
    className: 'product-previews'
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: 'product-previews__top'
  }, title && _react.default.createElement("h3", null, title), subTitle && _react.default.createElement("p", {
    className: 'textDescription'
  }, subTitle)), _react.default.createElement("div", {
    className: 'product-preview__list row'
  }, _react.default.createElement("div", {
    className: "col"
  }, products.length >= 1 && products[0] && _react.default.createElement("div", {
    key: '1',
    className: 'product-previews__item',
    style: products[0].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(products[0].image) + ")"
    } : {}
  }, _react.default.createElement("div", {
    className: 'product-previews__item__content'
  }, products[0].description && _react.default.createElement("p", {
    className: 'product-previews__item__description',
    style: products[0].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[0].description), _react.default.createElement("div", {
    className: 'product-previews__item__divider'
  }), products[0].title && _react.default.createElement("h2", {
    className: 'product-previews__item__title',
    style: products[0].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[0].title), _react.default.createElement(_Button.default, {
    url: products[0].url
  }, "More")))), _react.default.createElement("div", {
    className: "col"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col"
  }, products.length >= 2 && products[1] && _react.default.createElement("div", {
    key: '2',
    className: 'product-previews__item product-previews__item--small',
    style: products[1].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(products[1].image) + ")"
    } : {}
  }, _react.default.createElement("div", {
    className: 'product-previews__item__content'
  }, products[1].description && _react.default.createElement("p", {
    className: 'product-previews__item__description',
    style: products[1].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[1].description), _react.default.createElement("div", {
    className: 'product-previews__item__divider'
  }), products[1].title && _react.default.createElement("h4", {
    className: 'product-previews__item__title',
    style: products[1].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[1].title), _react.default.createElement(_Button.default, {
    url: products[1].url
  }, "More")))), _react.default.createElement("div", {
    className: "col"
  }, products.length >= 3 && products[2] && _react.default.createElement("div", {
    key: '3',
    className: 'product-previews__item product-previews__item--small',
    style: products[2].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(products[2].image) + ")"
    } : {}
  }, _react.default.createElement("div", {
    className: 'product-previews__item__content'
  }, products[2].description && _react.default.createElement("p", {
    className: 'product-previews__item__description',
    style: products[2].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[2].description), _react.default.createElement("div", {
    className: 'product-previews__item__divider'
  }), products[2].title && _react.default.createElement("h4", {
    className: 'product-previews__item__title',
    style: products[2].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[2].title), _react.default.createElement(_Button.default, {
    url: products[2].url
  }, "More"))))), _react.default.createElement("div", {
    className: "row"
  }, products.length >= 4 && products[3] && _react.default.createElement("div", {
    key: '4',
    className: 'product-previews__item product-previews__item--small',
    style: products[3].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(products[3].image) + ")"
    } : {}
  }, _react.default.createElement("div", {
    className: 'product-previews__item__content'
  }, products[1].description && _react.default.createElement("p", {
    className: 'product-previews__item__description',
    style: products[3].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[3].description), _react.default.createElement("div", {
    className: 'product-previews__item__divider'
  }), products[3].title && _react.default.createElement("h4", {
    className: 'product-previews__item__title',
    style: products[3].isBkgDark ? {
      color: 'white'
    } : {}
  }, products[3].title), _react.default.createElement(_Button.default, {
    url: products[3].url
  }, "More"))))))));
};

var _default = ProductsMenu;
exports.default = _default;