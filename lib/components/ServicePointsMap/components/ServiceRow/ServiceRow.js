"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../../../List"));

var _ServiceRowItem = _interopRequireDefault(require("./components/ServiceRowItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceRow = function ServiceRow(props) {
  var title = props.title,
      items = props.items;
  return _react.default.createElement(_List.default, {
    data: items
  }, function (_a) {
    var data = _a.data;
    return _react.default.createElement("div", {
      className: 'serviceRow'
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("div", {
      className: "row serviceRow__list"
    }, _react.default.createElement("div", {
      className: "col-12 col-md-3"
    }, _react.default.createElement("h3", {
      className: 'serviceRow__list__title'
    }, title)), _react.default.createElement("div", {
      className: "col-12 col-md-9"
    }, data && data.map(function (item, i) {
      return _react.default.createElement(_ServiceRowItem.default, {
        key: i,
        web: item.web,
        text: item.text,
        title: item.title,
        phone: item.phone,
        email: item.email,
        address: item.address,
        storeChief: item.storeChief
      });
    })))));
  });
};

var _default = ServiceRow;
exports.default = _default;