"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _Slider = _interopRequireDefault(require("../../../lib/partials/Slider"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

    _this.componentWillReceiveProps = function (nextProps) {
      if (_this.state.slides !== nextProps.data.slides) {
        _this.setState({
          slides: nextProps.data.slides
        });
      }
    };

    _this.state = {
      slides: _this.props.data.slides
    };
    return _this;
  }

  Carousel.prototype.renderSlides = function (data) {
    if (data.length < 1) {
      return;
    }

    var result = [];
    data.map(function (slide, i) {
      result.push(React.createElement("div", {
        key: i,
        className: 'carousel__images__img'
      }, React.createElement("div", {
        className: 'container'
      }, React.createElement("div", {
        className: "carousel__images__img__content " + (slide.isCentred ? 'center' : '')
      }, slide.subTitle && React.createElement("h2", {
        style: slide.isBackgroundBlack ? {
          color: 'white'
        } : {}
      }, slide.subTitle), slide.title && React.createElement("h1", {
        style: slide.isBackgroundBlack ? {
          color: 'white'
        } : {}
      }, slide.title), React.createElement("p", null, slide.description), slide.buttonTitle && React.createElement("div", {
        className: 'carousel__images__img__content__btnHolder',
        style: slide.isCentred ? {
          margin: '0 auto'
        } : {}
      }, React.createElement(_Button.default, {
        classes: (slide.isBackgroundBlack ? '' : 'btn--bordered') + " \n                              " + (slide.isCentred ? 'btn--center' : ''),
        url: slide.url
      }, slide.buttonTitle)))), slide.image && React.createElement(_Media.default, {
        type: 'image',
        data: slide.image
      })));
    });
    return result;
  };

  Carousel.prototype.render = function () {
    var _this = this;

    return React.createElement(_List.default, {
      data: this.state.slides
    }, function (_a) {
      var data = _a.data;
      return React.createElement(_Slider.default, {
        delay: 10000,
        slides: _this.renderSlides(data),
        wrapperClasses: 'sliderAtTop',
        autoplay: _this.state.slides.length <= 1 ? false : true,
        showDots: _this.state.slides.length <= 1 ? false : true,
        showArrows: _this.state.slides.length <= 1 ? false : true
      });
    });
  };

  return Carousel;
}(React.Component);

var _default = Carousel;
exports.default = _default;