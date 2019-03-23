"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FaqItem =
/** @class */
function (_super) {
  __extends(FaqItem, _super);

  function FaqItem(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      show: false
    };
    return _this;
  }

  FaqItem.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        title = _a.title,
        text = _a.text;
    return _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-12"
    }, _react.default.createElement("div", {
      onClick: function onClick() {
        return _this.setState({
          show: !_this.state.show
        });
      },
      className: "faq__list__show " + (this.state.show ? 'faq__list__show--minus' : '')
    }), _react.default.createElement("div", {
      className: 'faq__list__item'
    }, _react.default.createElement("h5", {
      onClick: function onClick() {
        return _this.setState({
          show: !_this.state.show
        });
      }
    }, title), this.state.show && text && _react.default.createElement(_reactMarkdown.default, {
      source: text
    })), _react.default.createElement("div", {
      className: 'faq__list__divider'
    })));
  };

  return FaqItem;
}(_react.default.Component);

var _default = FaqItem;
exports.default = _default;