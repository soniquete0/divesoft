"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DiscountOffer = function DiscountOffer(props) {
  var _a = props.data,
      discountText = _a.discountText,
      discountImage = _a.discountImage,
      couponText = _a.couponText,
      couponImage = _a.couponImage,
      promotionText = _a.promotionText,
      promotionImage = _a.promotionImage,
      productText = _a.productText,
      productImage = _a.productImage,
      productUrl = _a.productUrl;
  return React.createElement("div", {
    className: 'discount-offer grid'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'discount-offer__list grid'
  }, React.createElement("div", {
    className: 'discount-offer__list__item grid'
  }, discountText && React.createElement(_reactMarkdown.default, {
    source: discountText
  }), discountImage && React.createElement(_Media.default, {
    type: 'image',
    data: discountImage
  })), React.createElement("div", {
    className: 'discount-offer__list__item grid'
  }, couponText && React.createElement(_reactMarkdown.default, {
    source: couponText
  }), couponImage && React.createElement(_Media.default, {
    type: 'image',
    data: couponImage
  })), React.createElement("div", {
    className: 'discount-offer__list__item grid'
  }, promotionText && React.createElement(_reactMarkdown.default, {
    source: promotionText
  }), promotionImage && React.createElement(_Media.default, {
    type: 'image',
    data: promotionImage
  })), React.createElement(_Link.default, {
    url: productUrl && productUrl.url
  }, React.createElement("div", {
    className: 'discount-offer__list__item grid'
  }, React.createElement("span", null, productText && productText), productImage && React.createElement(_Media.default, {
    type: 'image',
    data: productImage
  }))))));
};

var _default = DiscountOffer;
exports.default = _default;