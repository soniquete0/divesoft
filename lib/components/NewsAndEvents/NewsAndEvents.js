"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

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

var NewsAndEvents =
/** @class */
function (_super) {
  __extends(NewsAndEvents, _super);

  function NewsAndEvents(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  NewsAndEvents.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        titleColor = _a.titleColor,
        backgroundImage = _a.backgroundImage,
        newsAndEvents = _a.newsAndEvents;
    return _react.default.createElement(_List.default, {
      data: newsAndEvents
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 9),
          items = _b.items,
          lastPage = _b.lastPage;

      return _react.default.createElement("div", {
        className: 'newsAndEvents',
        style: {
          backgroundImage: backgroundImage && "url(" + (0, _getImageUrl.default)(backgroundImage) + ")"
        }
      }, _react.default.createElement("div", {
        className: 'container'
      }, title && _react.default.createElement("h3", {
        style: {
          color: "" + titleColor
        }
      }, title), _react.default.createElement("div", {
        className: 'newsAndEvents__list row d-flex justify-content-between align-items-center'
      }, items && items.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: 'newsAndEvents__list__item col-12 col-md-4'
        }, _react.default.createElement("div", {
          className: "row"
        }, item.img && _react.default.createElement(_Media.default, {
          type: 'image',
          data: item.img
        })), _react.default.createElement("div", {
          className: "row"
        }, _react.default.createElement("div", {
          className: 'newsAndEvents__list__item__content'
        }, _react.default.createElement("p", {
          className: 'newsAndEvents__list__item__content--date'
        }, _react.default.createElement("span", null, item.day), " / ", item.mounthAndYear), _react.default.createElement("h4", null, item.title), _react.default.createElement("p", {
          className: 'newsAndEvents__list__item__content--text'
        }, item.text), _react.default.createElement(_Link.default, {
          pageId: item.url && item.url.pageId
        }, "More information"))));
      })), _this.state.numberOfPage < lastPage && _react.default.createElement("button", {
        className: 'btn',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "Show more")));
    });
  };

  return NewsAndEvents;
}(_react.default.Component);

var _default = NewsAndEvents;
exports.default = _default;