"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));

require("react-alice-carousel/lib/alice-carousel.css");

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Gallery = function Gallery(props) {
  var slides = props.data.slides;
  var responsive = {
    320: {
      items: 1
    },
    400: {
      items: 2
    },
    700: {
      items: 3
    },
    1024: {
      items: 4
    }
  };
  var autoPlay = false;

  if (slides.length > 4) {
    autoPlay = true;
  }

  return React.createElement(_List.default, {
    data: slides
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'gallery'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement(_reactAliceCarousel.default, {
      responsive: responsive,
      dotsDisabled: true,
      autoPlay: autoPlay,
      autoPlayInterval: 7000,
      stopAutoPlayOnHover: true
    }, data && data.map(function (slide, i) {
      return React.createElement("div", {
        className: 'gallery__item',
        key: i
      }, slide.image && React.createElement(_Media.default, {
        type: 'image',
        data: slide.image
      }));
    }))));
  });
};

var _default = Gallery;
exports.default = _default;