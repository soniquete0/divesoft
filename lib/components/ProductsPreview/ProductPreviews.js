"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ProductPreviews = function ProductPreviews(props) {
  var productPreviews = props.data.productPreviews;
  console.log(productPreviews);
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "products-preview row"
  }, React.createElement("div", {
    className: "col"
  }, productPreviews[0] && React.createElement(_Link.default, {
    key: '1',
    url: productPreviews[0].url && productPreviews[0].url.url,
    style: productPreviews[0].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(productPreviews[0].image) + ")"
    } : {}
  }, productPreviews[0].description && React.createElement("p", null, productPreviews[0].description), React.createElement("div", {
    className: 'products-preview__divider'
  }), productPreviews[0].title && React.createElement("p", null, productPreviews[0].title))), React.createElement("div", {
    className: "col"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col"
  }, productPreviews[1] && React.createElement(_Link.default, {
    key: '2',
    url: productPreviews[1].url && productPreviews[1].url.url,
    style: productPreviews[1].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(productPreviews[1].image) + ")"
    } : {}
  }, productPreviews[1].description && React.createElement("p", null, productPreviews[1].description), React.createElement("div", {
    className: 'products-preview__divider'
  }), productPreviews[1].title && React.createElement("p", null, productPreviews[1].title))), React.createElement("div", {
    className: "col"
  }, productPreviews[2] && React.createElement(_Link.default, {
    key: '3',
    url: productPreviews[2].url && productPreviews[2].url.url,
    style: productPreviews[2].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(productPreviews[2].image) + ")"
    } : {}
  }, productPreviews[2].description && React.createElement("p", null, productPreviews[2].description), React.createElement("div", {
    className: 'products-preview__divider'
  }), productPreviews[2].title && React.createElement("p", null, productPreviews[2].title)))), React.createElement("div", {
    className: "row"
  }, productPreviews[3] && React.createElement(_Link.default, {
    key: '4',
    url: productPreviews[3].url && productPreviews[3].url.url,
    style: productPreviews[3].image ? {
      backgroundImage: "url(" + (0, _getImageUrl.default)(productPreviews[3].image) + ")"
    } : {}
  }, productPreviews[3].description && React.createElement("p", null, productPreviews[3].description), React.createElement("div", {
    className: 'products-preview__divider'
  }), productPreviews[3].title && React.createElement("p", null, productPreviews[3].title))))));
};

var _default = ProductPreviews;
exports.default = _default;