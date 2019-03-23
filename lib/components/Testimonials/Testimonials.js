"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Slider = _interopRequireDefault(require("../../../lib/partials/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Mobile = function Mobile(props) {
  return _react.default.createElement(_reactResponsive.default, __assign({}, props, {
    maxWidth: 767
  }));
};

var Default = function Default(props) {
  return _react.default.createElement(_reactResponsive.default, __assign({}, props, {
    minWidth: 768
  }));
};

var Testimonials = function Testimonials(props) {
  var _a = props.data,
      title = _a.title,
      description = _a.description,
      testimonials = _a.testimonials;
  return _react.default.createElement(_List.default, {
    data: testimonials
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'testimonials'
    }, _react.default.createElement("div", {
      className: "container"
    }, title && _react.default.createElement("h2", null, title), description && _react.default.createElement("p", {
      className: 'testimonials__description textDescription'
    }, description), _react.default.createElement(Default, null, _react.default.createElement("div", {
      className: 'testimonials__list'
    }, _react.default.createElement("div", {
      className: "row"
    }, data && data.map(function (item, i) {
      return _react.default.createElement("div", {
        key: i,
        className: 'col-12 col-md-4'
      }, _react.default.createElement("div", {
        className: 'testimonials__list__item'
      }, item.img && _react.default.createElement(_Media.default, {
        type: 'image',
        data: item.img
      }), item.title && _react.default.createElement("h4", null, item.title), item.from && _react.default.createElement("span", null, item.from), item.text && _react.default.createElement("p", null, item.text)));
    })))), _react.default.createElement(Mobile, null, _react.default.createElement(_Slider.default, {
      slides: data && data.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: 'col-12'
        }, _react.default.createElement("div", {
          className: 'testimonials__list__item'
        }, item.img && _react.default.createElement(_Media.default, {
          type: 'image',
          data: item.img
        }), item.title && _react.default.createElement("h4", null, item.title), item.from && _react.default.createElement("span", null, item.from), item.text && _react.default.createElement("p", null, item.text)));
      }),
      delay: 7000,
      showArrows: data.length > 1 ? true : false,
      autoplay: data.length > 1 ? true : false,
      isFullWidth: false
    }))));
  });
};

var _default = Testimonials;
exports.default = _default;