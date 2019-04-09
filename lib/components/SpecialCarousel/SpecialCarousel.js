"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Slider = _interopRequireDefault(require("../../../lib/partials/Slider"));

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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var SpecialCarousel =
/** @class */
function (_super) {
  __extends(SpecialCarousel, _super);

  function SpecialCarousel(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  SpecialCarousel.prototype.renderSlides = function (data) {
    if (data.length < 1) {
      return;
    }

    var result = [];
    data.map(function (slide, i) {
      result.push(_react.default.createElement("div", {
        key: i,
        className: 'specialCarousel'
      }, _react.default.createElement("div", {
        className: "specialCarousel__content"
      }, _react.default.createElement("div", {
        className: "container"
      }, slide.title && _react.default.createElement("h2", {
        style: slide.isBackgroundBlack ? {
          color: 'white'
        } : {}
      }, slide.title), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "specialCarousel__content__info col-12 col-md-8 col-lg-8 col-xl-6"
      }, slide.subTitle && _react.default.createElement("h3", {
        style: slide.isBackgroundBlack ? {
          color: 'white'
        } : {}
      }, _react.default.createElement("span", {
        style: {
          color: '#e50000'
        }
      }, "0" + (i + 1) + ". "), slide.subTitle), slide.description && _react.default.createElement("div", {
        className: "specialCarousel__content__info__description"
      }, slide.description && _react.default.createElement(_reactMarkdown.default, {
        source: slide.description
      })), _react.default.createElement("div", {
        className: 'specialCarousel__content__downloads'
      }, _react.default.createElement("div", {
        className: 'specialCarousel__content__downloads__item'
      }, _react.default.createElement(_Link.default, __assign({}, slide.firstUrl), _react.default.createElement(_Media.default, {
        type: 'image',
        data: slide.firstDocImg
      })), slide.firstUrl && _react.default.createElement("p", null, slide.firstDocText)), _react.default.createElement("div", {
        className: 'specialCarousel__content__downloads__item'
      }, _react.default.createElement(_Link.default, __assign({}, slide.secondUrl), _react.default.createElement(_Media.default, {
        type: 'image',
        data: slide.secondDocImg
      })), slide.secondUrl && _react.default.createElement("p", null, slide.secondDocText)))), _react.default.createElement("div", {
        className: "specialCarousel__content__info col-12 col-md-4 col-lg-4 col-xl-6"
      }, _react.default.createElement(_Media.default, {
        type: 'image',
        data: slide.productImg
      }))))), _react.default.createElement(_Media.default, {
        key: i,
        type: 'image',
        data: slide.image
      })));
    });
    return result;
  };

  SpecialCarousel.prototype.render = function () {
    var _this = this;

    return _react.default.createElement(_List.default, {
      data: this.props.data.slides
    }, function (_a) {
      var data = _a.data;
      return _react.default.createElement(_Slider.default, {
        delay: 10000,
        slides: _this.renderSlides(data),
        autoplay: _this.props.data.slides.length <= 1 ? false : true,
        showDots: _this.props.data.slides.length <= 1 ? false : true,
        showArrows: _this.props.data.slides.length <= 1 ? false : true
      });
    });
  };

  return SpecialCarousel;
}(_react.default.Component);

var _default = SpecialCarousel;
exports.default = _default;