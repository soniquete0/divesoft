"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

var Downloads = function Downloads(props) {
  var _a = props.data,
      title = _a.title,
      description = _a.description,
      files = _a.files;
  return _react.default.createElement("div", {
    className: 'downloads'
  }, _react.default.createElement("div", {
    className: "container"
  }, title && _react.default.createElement("h2", {
    className: 'downloads__title'
  }, title), description && _react.default.createElement("p", {
    className: 'textDescription'
  }, description), _react.default.createElement("div", {
    className: "downloads__list row"
  }, _react.default.createElement(_List.default, {
    data: files
  }, function (_a) {
    var data = _a.data;
    return data.map(function (item, i) {
      return _react.default.createElement("div", {
        key: i,
        className: 'col-12 col-md-4 downloads__list__item'
      }, _react.default.createElement(_Media.default, {
        type: 'image',
        data: item.img
      }), item.title && _react.default.createElement("h4", null, item.title), item.url && item.urlText && _react.default.createElement(_Link.default, __assign({}, item.url), item.urlText));
    });
  }))));
};

var _default = Downloads;
exports.default = _default;