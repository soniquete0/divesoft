"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var style = {
  width: '100%',
  height: 'auto',
  border: '1px gray',
  background: 'lightsalmon'
};

var AlertNotFound =
/** @class */
function (_super) {
  __extends(AlertNotFound, _super);

  function AlertNotFound() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AlertNotFound.prototype.render = function () {
    switch (this.props.type) {
      case 'component':
        return React.createElement("div", {
          style: style
        }, "Component was not found !");

      case 'form':
        return React.createElement("div", {
          style: style
        }, "Form was not found !");

      default:
        return React.createElement("div", {
          style: style
        }, "Something was not found !");
    }
  };

  return AlertNotFound;
}(React.Component);

var _default = AlertNotFound;
exports.default = _default;