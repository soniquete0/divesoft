"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

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

var ProductComponents = function ProductComponents(props) {
  var _a = props.data,
      title = _a.title,
      description = _a.description,
      components = _a.components;
  var mobileViews = [];

  for (var i = 0; i < components.length; i++) {
    mobileViews.push(_react.default.createElement("div", {
      key: i,
      className: 'productComponents__mobileItem'
    }, _react.default.createElement(_Media.default, {
      type: 'image',
      data: components[i].image
    }), components[i].title && _react.default.createElement("h5", null, components[i].title), components[i].description && _react.default.createElement("p", null, components[i].description), _react.default.createElement(_Link.default, __assign({}, components[i].url), "More information")));
  }

  return _react.default.createElement(_List.default, {
    data: components
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'productComponents'
    }, _react.default.createElement("div", {
      className: "container"
    }, title && _react.default.createElement("h2", null, title), description && _react.default.createElement("p", {
      className: 'textDescription'
    }, description), _react.default.createElement(Default, null, _react.default.createElement("div", {
      className: 'productComponents__list row'
    }, data && data.map(function (item, i) {
      return _react.default.createElement("div", {
        key: i,
        className: "col-12 col-md-6 col-lg-4"
      }, _react.default.createElement("div", {
        className: 'productComponents__list__item'
      }, _react.default.createElement(_Media.default, {
        type: 'image',
        data: item.image
      }), _react.default.createElement("div", {
        className: 'productComponents__list__item__content'
      }, _react.default.createElement("h5", null, item.title), _react.default.createElement("p", null, item.description), _react.default.createElement(_Link.default, __assign({}, item.url), "More information"))));
    }))), _react.default.createElement(Mobile, null, _react.default.createElement(_Slider.default, {
      isFullWidth: false,
      delay: 7000,
      slides: mobileViews,
      showArrows: true
    }))));
  });
};

var _default = ProductComponents;
exports.default = _default;