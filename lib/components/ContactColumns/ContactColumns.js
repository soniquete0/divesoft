"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactColumns = function ContactColumns(props) {
  var _a = props.data,
      firstTitle = _a.firstTitle,
      firstAddress = _a.firstAddress,
      firstEmail = _a.firstEmail,
      firstAccounts = _a.firstAccounts,
      secondTitle = _a.secondTitle,
      secondAddress = _a.secondAddress,
      secondEmail = _a.secondEmail,
      secondAccounts = _a.secondAccounts,
      bottomInfo = _a.bottomInfo;
  return _react.default.createElement("div", {
    className: 'container'
  }, _react.default.createElement("div", {
    className: 'contactColumns'
  }, _react.default.createElement("div", {
    className: 'contactColumns__list d-flex justify-content-between'
  }, _react.default.createElement("div", {
    className: 'contactColumns__col'
  }, firstTitle && _react.default.createElement("h3", null, firstTitle), firstAddress && _react.default.createElement("h4", {
    className: 'contactColumns__col__address'
  }, firstAddress), firstEmail && _react.default.createElement("h5", null, "E-mail: ", _react.default.createElement("a", {
    style: {
      color: '#e50000'
    },
    href: "mailto:" + firstEmail
  }, firstEmail)), firstAccounts && _react.default.createElement(_reactMarkdown.default, {
    source: firstAccounts
  })), _react.default.createElement("div", {
    className: 'contactColumns__col'
  }, secondTitle && _react.default.createElement("h3", null, secondTitle), secondAddress && _react.default.createElement("h4", {
    className: 'contactColumns__col__address'
  }, secondAddress), secondEmail && _react.default.createElement("h5", null, "E-mail: ", _react.default.createElement("a", {
    style: {
      color: '#e50000'
    },
    href: "mailto:" + secondEmail
  }, secondEmail)), secondAccounts && _react.default.createElement(_reactMarkdown.default, {
    source: secondAccounts
  }))), bottomInfo && _react.default.createElement("p", {
    className: 'contactColumns__bottomInfo'
  }, bottomInfo), _react.default.createElement("div", {
    className: 'contactColumns__divider'
  })));
};

var _default = ContactColumns;
exports.default = _default;