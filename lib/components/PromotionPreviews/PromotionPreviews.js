"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));

require("react-alice-carousel/lib/alice-carousel.css");

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PromotionPreviews = function PromotionPreviews(props) {
  var promotionPreviews = props.data.promotionPreviews;
  var responsive = {
    800: {
      items: 1
    },
    900: {
      items: 2
    },
    1024: {
      items: 3
    }
  };
  var autoPlay = false;

  if (promotionPreviews.length > 3) {
    autoPlay = true;
  }

  return React.createElement(_List.default, {
    data: promotionPreviews
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'promotions'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement(_reactAliceCarousel.default, {
      responsive: responsive,
      dotsDisabled: true,
      buttonsDisabled: true,
      autoPlay: autoPlay,
      mouseDragEnabled: true,
      autoPlayInterval: 6000,
      stopAutoPlayOnHover: true
    }, data && data.map(function (item, i) {
      return React.createElement("div", {
        key: i,
        className: 'promotion-previews__item grid'
      }, React.createElement("div", {
        className: 'promotion-previews__item__left'
      }, React.createElement("p", {
        className: 'promotion-previews__item__left__date'
      }, item.date && item.date)), React.createElement("div", {
        className: 'promotion-previews__item__right'
      }, React.createElement("p", {
        className: 'promotion-previews__item__right__title'
      }, item.title && item.title), React.createElement("p", {
        className: 'promotion-previews__item__right__description'
      }, item.description && item.description), React.createElement(_Link.default, {
        url: item.url && item.url.url,
        className: 'promotion-previews__item__right__url'
      }, item.titleUrl && item.titleUrl)));
    }))));
  });
};

var _default = PromotionPreviews;
exports.default = _default;