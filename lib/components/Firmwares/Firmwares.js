"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

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

var Firmwares = function Firmwares(props) {
  var _a = props.data,
      title = _a.title,
      divider = _a.divider,
      articles = _a.articles;
  return _react.default.createElement(_List.default, {
    data: articles
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'firmwares'
    }, _react.default.createElement("div", {
      className: 'container'
    }, _react.default.createElement("h2", null, title), data && data.map(function (item, i) {
      return _react.default.createElement("div", {
        key: i,
        className: 'firmwares__item'
      }, item.title && _react.default.createElement("h4", null, item.title), _react.default.createElement(_reactMarkdown.default, {
        source: item.text
      }), item.url && _react.default.createElement(_Link.default, __assign({}, item.url), "Download"));
    }), divider ? _react.default.createElement("div", {
      className: 'firmwares__divider'
    }) : ''));
  });
};

var _default = Firmwares;
exports.default = _default;