"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Link = _interopRequireDefault(require("../../../../../../lib/partials/Link"));

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

var ServiceRowItem =
/** @class */
function (_super) {
  __extends(ServiceRowItem, _super);

  function ServiceRowItem(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      show: false
    };
    return _this;
  }

  ServiceRowItem.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        title = _a.title,
        text = _a.text,
        address = _a.address,
        storeChief = _a.storeChief,
        phone = _a.phone,
        email = _a.email,
        web = _a.web;
    return _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-12 col-md-4"
    }, _react.default.createElement("h5", {
      onClick: function onClick() {
        return _this.setState({
          show: !_this.state.show
        });
      }
    }, title), this.state.show ? _react.default.createElement("div", {
      className: 'serviceRow__list__contacts'
    }, storeChief && _react.default.createElement("p", null, "Store chief: ", storeChief), phone && _react.default.createElement("p", null, "Phone: ", _react.default.createElement("a", {
      href: "tel:" + phone
    }, phone)), email && _react.default.createElement("p", null, "Email: ", _react.default.createElement("a", {
      href: "mailto:" + email
    }, email)), web && _react.default.createElement("p", null, "Web: ", _react.default.createElement(_Link.default, {
      urlNewWindow: true,
      url: web.url
    }, web.url.toString()))) : ''), _react.default.createElement("div", {
      className: "col-12 col-md-8"
    }, _react.default.createElement("div", {
      onClick: function onClick() {
        return _this.setState({
          show: !_this.state.show
        });
      },
      className: "serviceRow__list__show " + (this.state.show ? 'serviceRow__list__show--minus' : '')
    }), _react.default.createElement("div", {
      className: 'serviceRow__list__item'
    }, _react.default.createElement("p", {
      onClick: function onClick() {
        return _this.setState({
          show: !_this.state.show
        });
      }
    }, address), this.state.show && text && _react.default.createElement(_reactMarkdown.default, {
      source: text
    }))), _react.default.createElement("div", {
      className: 'serviceRow__list__divider'
    }));
  };

  return ServiceRowItem;
}(_react.default.Component);

var _default = ServiceRowItem;
exports.default = _default;