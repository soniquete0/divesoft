"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = function Controls(props) {
  var cities = [];
  var countries = [];
  var associations = [];

  var propsToArray = function propsToArray() {
    for (var i = 0; i < props.items.length; i++) {
      countries.push(props.items[i].country);
    }

    for (var i = 0; i < props.items.length; i++) {
      cities.push(props.items[i].city);
    }

    for (var i = 0; i < props.items.length; i++) {
      associations.push(props.items[i].association);
    }
  };

  var uniqueArray = function uniqueArray(arr) {
    return Array.from(new Set(arr));
  };

  propsToArray();
  cities = uniqueArray(cities);
  countries = uniqueArray(countries);
  associations = uniqueArray(associations);
  return _react.default.createElement("div", {
    className: 'map__controls'
  }, _react.default.createElement("div", {
    className: 'container'
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-12 col-md-4"
  }, _react.default.createElement("div", {
    className: 'select'
  }, _react.default.createElement("select", null, countries && countries.map(function (item, i) {
    return _react.default.createElement("option", {
      key: i,
      value: i
    }, item);
  })))), _react.default.createElement("div", {
    className: "col-12 col-md-4"
  }, _react.default.createElement("div", {
    className: 'select'
  }, _react.default.createElement("select", null, cities && cities.map(function (item, i) {
    return _react.default.createElement("option", {
      key: i,
      value: i
    }, item);
  })))), _react.default.createElement("div", {
    className: "col-12 col-md-4"
  }, _react.default.createElement("div", {
    className: 'select'
  }, _react.default.createElement("select", null, associations && associations.map(function (item, i) {
    return _react.default.createElement("option", {
      key: i,
      value: i
    }, item);
  })))))));
};

var _default = Controls;
exports.default = _default;