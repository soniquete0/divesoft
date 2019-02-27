"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));

require("react-alice-carousel/lib/alice-carousel.css");

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Carousel =
/** @class */
function (_super) {
  __extends(Carousel, _super);

  function Carousel(props) {
    var _this = _super.call(this, props) || this;

    _this.slideTo = function (i) {
      _this.setState({
        currentIndex: i
      });
    };

    _this.state = {
      currentIndex: 0,
      itemsInSlide: 1,
      galleryItems: _this.galleryItems()
    };
    return _this;
  }

  Carousel.prototype.galleryItems = function () {
    var slides = this.props.data.slides;
    var images = [];

    if (slides) {
      slides.map(function (slide, i) {
        if (slide.image) {
          images.push(React.createElement(_Link.default, {
            url: slide.url && slide.url.url
          }, React.createElement(_Media.default, {
            key: i,
            type: 'image',
            data: slide.image
          })));
        }
      });
    }

    return images;
  };

  Carousel.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        slides = _a.slides,
        displayOnTop = _a.displayOnTop;
    return React.createElement(_List.default, {
      data: slides
    }, function (_a) {
      var data = _a.data;
      return React.createElement("div", {
        className: 'carousel'
      }, displayOnTop ? React.createElement("div", {
        className: 'carousel__divider'
      }) : '', React.createElement("div", {
        className: 'carousel__images',
        style: displayOnTop ? {} : {
          gridRow: 'auto'
        }
      }, React.createElement(_reactAliceCarousel.default, {
        autoPlay: true,
        dotsDisabled: true,
        buttonsDisabled: true,
        autoPlayInterval: 10000,
        items: _this.state.galleryItems,
        onSlideChanged: function onSlideChanged(e) {
          _this.setState({
            currentIndex: e.item
          });
        },
        slideToIndex: _this.state.currentIndex
      })), React.createElement("div", {
        className: 'carousel__titles',
        style: displayOnTop ? {} : {
          gridRow: 'auto'
        }
      }, React.createElement("ul", {
        className: 'carousel__titles__list'
      }, slides && slides.map(function (slide, i) {
        return React.createElement("li", {
          key: i,
          onClick: function onClick() {
            return _this.slideTo(i);
          },
          className: 'carousel__titles__list__item',
          style: i === _this.state.currentIndex ? {
            color: '#3eac49',
            fontWeight: 700,
            backgroundColor: 'white',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
            borderBottom: 'none !important'
          } : {}
        }, React.createElement("span", null, slide.title && slide.title));
      }))));
    });
  };

  return Carousel;
}(React.Component);

var _default = Carousel;
exports.default = _default;