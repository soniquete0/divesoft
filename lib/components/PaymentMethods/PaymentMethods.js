"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PaymentMethods = function PaymentMethods(props) {
  var _a = props.data,
      title = _a.title,
      methods = _a.methods;
  return React.createElement(_List.default, {
    data: methods
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'payment-methods'
    }, React.createElement("div", {
      className: 'container'
    }, title && React.createElement("h3", null, title), React.createElement("div", {
      className: 'payment-methods__list grid'
    }, data && data.map(function (method, i) {
      return React.createElement("div", {
        key: i,
        className: 'payment-methods__list__item'
      }, method.image && React.createElement(_Media.default, {
        key: i,
        type: 'image',
        data: method.image
      }));
    }))));
  });
};

var _default = PaymentMethods;
exports.default = _default;