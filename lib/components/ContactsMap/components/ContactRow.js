"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../../List"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

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

var ContactRow =
/** @class */
function (_super) {
  __extends(ContactRow, _super);

  function ContactRow(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  ContactRow.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        title = _a.title,
        rows = _a.rows;
    return _react.default.createElement(_List.default, {
      data: rows
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 3),
          items = _b.items,
          lastPage = _b.lastPage;

      return _react.default.createElement("div", {
        className: 'contactRow'
      }, _react.default.createElement("div", {
        className: 'container'
      }, _react.default.createElement("div", {
        className: "row contactRow__divider"
      }, _react.default.createElement("div", {
        className: "col-12 col-md-3"
      }, _react.default.createElement("h3", null, title), _this.state.numberOfPage < lastPage && _react.default.createElement("button", {
        className: 'contactRow__showMore',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "Show more")), _react.default.createElement("div", {
        className: "col-12 col-md-9"
      }, _react.default.createElement("div", {
        className: 'row'
      }, items && items.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: 'contactRow__item col-12 col-md-4'
        }, _react.default.createElement("h5", null, item.name), _react.default.createElement("span", null, item.position), _react.default.createElement("p", null, "W: ", _react.default.createElement(_Link.default, __assign({}, item.url), item.urlTitle)), _react.default.createElement("p", null, "M: ", _react.default.createElement("a", {
          href: "mailto:" + item.email
        }, item.email)), _react.default.createElement("p", null, "P: ", _react.default.createElement("a", {
          href: "tel:" + item.phone
        }, item.phone)));
      }))))));
    });
  };

  return ContactRow;
}(_react.default.Component);

var _default = ContactRow;
exports.default = _default;