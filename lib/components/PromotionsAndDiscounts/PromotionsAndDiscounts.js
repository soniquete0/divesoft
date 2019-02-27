"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));

require("react-alice-carousel/lib/alice-carousel.css");

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PromotionsAndDiscounts = function PromotionsAndDiscounts(props) {
  var _a = props.data,
      title = _a.title,
      items = _a.items;
  var responsive = {
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    1024: {
      items: 3
    }
  };
  var autoPlay = false;

  if (items.length > 3) {
    autoPlay = true;
  }

  return React.createElement(_List.default, {
    data: items
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'prom-and-disc'
    }, React.createElement("div", {
      className: "container"
    }, title && React.createElement("h3", null, title) || React.createElement("div", {
      style: {
        height: 50
      }
    }), React.createElement(_reactAliceCarousel.default, {
      responsive: responsive,
      dotsDisabled: true,
      autoPlay: autoPlay,
      autoPlayInterval: 6000,
      stopAutoPlayOnHover: true
    }, data && data.map(function (item, i) {
      return React.createElement("div", {
        key: i,
        className: 'prom-and-disc__item'
      }, React.createElement(_Link.default, {
        url: item.url && item.url.url
      }, item.image && React.createElement(_Media.default, {
        type: 'image',
        data: item.image
      })));
    }))));
  });
};

var _default = PromotionsAndDiscounts;
exports.default = _default;