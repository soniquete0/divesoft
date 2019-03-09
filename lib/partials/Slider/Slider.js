"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Slide = _interopRequireDefault(require("./components/Slide"));

var _LeftArrow = _interopRequireDefault(require("./components/LeftArrow"));

var _RightArrow = _interopRequireDefault(require("./components/RightArrow"));

var _Dots = _interopRequireDefault(require("./components/Dots"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Slider =
/** @class */
function (_super) {
  __extends(Slider, _super);

  function Slider(props) {
    var _this = _super.call(this, props) || this;

    _this.componentWillUnmount = function () {
      return clearInterval(_this.state.interval);
    };

    _this.goToNextSlide = function () {
      if (_this.state.currentIndex === _this.state.slides.length - 1) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth()
        };
      });
    };

    _this.goToPrevSlide = function () {
      if (_this.state.currentIndex === 0) {
        _this.setState({
          currentIndex: _this.state.slides.length,
          translateValue: _this.state.slides.length * -_this.slideWidth()
        });
      }

      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth()
        };
      });
    };

    _this.goTo = function (index) {
      if (index === _this.state.currentIndex) {
        return;
      }

      if (index > _this.state.currentIndex) {
        _this.setState({
          currentIndex: index,
          translateValue: index * -_this.slideWidth()
        });
      } else {
        _this.setState({
          currentIndex: index,
          translateValue: _this.state.translateValue + (_this.state.currentIndex - index) * _this.slideWidth()
        });
      }
    };

    _this.slideWidth = function () {
      return document.querySelector('.slider__slide').clientWidth;
    };

    _this.state = {
      slides: [],
      interval: null,
      currentIndex: 0,
      translateValue: 0
    };
    return _this;
  }

  Slider.prototype.componentDidMount = function () {
    var _a = this.props,
        autoplay = _a.autoplay,
        delay = _a.delay;
    this.setState({
      slides: this.props.slides
    });

    if (autoplay) {
      var interval = setInterval(this.goToNextSlide, delay);
      this.setState({
        interval: interval
      });
    }
  };

  Slider.prototype.render = function () {
    return _react.default.createElement("div", {
      className: "slider"
    }, _react.default.createElement("div", {
      className: "slider__wrapper",
      style: {
        transform: "translateX(" + this.state.translateValue + "px)",
        transition: 'transform ease-out 0.25s'
      }
    }, this.state.slides.map(function (slide, i) {
      return _react.default.createElement(_Slide.default, {
        key: i,
        slide: slide
      });
    })), this.props.showArrows ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_LeftArrow.default, {
      goToPrevSlide: this.goToPrevSlide
    }), _react.default.createElement(_RightArrow.default, {
      goToNextSlide: this.goToNextSlide
    })) : '', this.props.showDots ? _react.default.createElement(_Dots.default, {
      goTo: this.goTo,
      len: this.props.slides.length,
      currentIndex: this.state.currentIndex
    }) : '');
  };

  return Slider;
}(_react.default.Component);

var _default = Slider;
exports.default = _default;