"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var ListOfLinks = function ListOfLinks(props) {
  return _react.default.createElement(_List.default, {
    data: props.data.links
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'listOfLinks'
    }, _react.default.createElement("div", {
      className: "container"
    }, data && data.map(function (item, i) {
      return _react.default.createElement(_Link.default, __assign({
        key: i
      }, item.url), item.title);
    })));
  });
};

var _default = ListOfLinks;
exports.default = _default;