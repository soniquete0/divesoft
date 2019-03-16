"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dots = _interopRequireDefault(require("./components/Dots"));

var _Slide = _interopRequireDefault(require("./components/Slide"));

var _LeftArrow = _interopRequireDefault(require("./components/LeftArrow"));

var _RightArrow = _interopRequireDefault(require("./components/RightArrow"));

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

    _this.componentWillReceiveProps = function (nextProps) {
      return _this.setState({
        slides: nextProps.slides
      });
    };

    _this.componentWillUnmount = function () {
      return clearInterval(_this.state.interval);
    };

    _this.goToNextSlide = function () {
      clearInterval(_this.state.interval);

      if (_this.state.currentIndex === _this.state.slides.length - 1) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0,
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        });
      }

      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth(),
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        };
      });
    };

    _this.goToPrevSlide = function () {
      clearInterval(_this.state.interval);

      if (_this.state.currentIndex === 0) {
        return _this.setState({
          currentIndex: _this.state.slides.length,
          translateValue: _this.state.slides.length * -_this.slideWidth(),
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        });
      }

      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth(),
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        };
      });
    };

    _this.goTo = function (index) {
      if (index === _this.state.currentIndex) {
        return;
      }

      clearInterval(_this.state.interval);

      if (index > _this.state.currentIndex) {
        _this.setState({
          currentIndex: index,
          translateValue: index * -_this.slideWidth(),
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        });
      } else {
        _this.setState({
          currentIndex: index,
          translateValue: _this.state.translateValue + (_this.state.currentIndex - index) * _this.slideWidth(),
          interval: setInterval(_this.goToNextSlide, _this.props.delay)
        });
      }
    };

    _this.slideWidth = function () {
      if (document.querySelector('.slider__slide')) {
        return document.querySelector('.slider__slide').clientWidth;
      } else {
        return 0; // fix for backoffice
      }
    };

    _this.state = {
      slides: _this.props.slides,
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

    if (autoplay) {
      var interval = setInterval(this.goToNextSlide, delay);
      this.setState({
        interval: interval
      });
    }
  };

  Slider.prototype.render = function () {
    return _react.default.createElement("div", {
      className: "slider " + this.props.wrapperClasses
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