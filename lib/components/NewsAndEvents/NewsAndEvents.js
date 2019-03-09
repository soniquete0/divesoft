"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var NewsAndEvents =
/** @class */
function (_super) {
  __extends(NewsAndEvents, _super);

  function NewsAndEvents(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      items: [],
      itemsToShow: 9,
      expanded: false
    };
    _this.showMore = _this.showMore.bind(_this);
    return _this;
  }

  NewsAndEvents.prototype.componentDidMount = function () {
    this.setState({
      items: this.props.data.newsAndEvents
    });
  };

  NewsAndEvents.prototype.showMore = function () {
    this.state.itemsToShow >= 3 ? this.setState({
      itemsToShow: this.state.items.length,
      expanded: true
    }) : this.setState({
      itemsToShow: 9,
      expanded: false
    });
  };

  NewsAndEvents.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        titleColor = _a.titleColor,
        backgroundImage = _a.backgroundImage;
    return React.createElement(_List.default, {
      data: this.state.items
    }, function (_a) {
      var data = _a.data;
      return React.createElement("div", {
        className: 'newsAndEvents',
        style: {
          backgroundImage: backgroundImage && "url(" + (0, _getImageUrl.default)(backgroundImage) + ")"
        }
      }, React.createElement("div", {
        className: 'container'
      }, title && React.createElement("h3", {
        style: {
          color: "" + titleColor
        }
      }, title), React.createElement("div", {
        className: 'newsAndEvents__list row d-flex justify-content-between align-items-center'
      }, data.slice(0, _this.state.itemsToShow).map(function (item, i) {
        return React.createElement("div", {
          key: i,
          className: 'newsAndEvents__list__item col'
        }, React.createElement("div", {
          className: "row"
        }, item.img && React.createElement(_Media.default, {
          type: 'image',
          data: item.img
        })), React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          className: 'newsAndEvents__list__item__content'
        }, React.createElement("p", {
          className: 'newsAndEvents__list__item__content--date'
        }, React.createElement("span", null, item.day), " / ", item.mounthAndYear), React.createElement("h4", null, item.title), React.createElement("p", {
          className: 'newsAndEvents__list__item__content--text'
        }, item.text), React.createElement(_Link.default, {
          url: item.url && item.url.url
        }, "More information"))));
      })), _this.state.items.length >= 9 ? React.createElement("button", {
        className: 'btn',
        onClick: _this.showMore
      }, "Show ", _this.state.expanded ? 'less' : 'more') : ''));
    });
  };

  return NewsAndEvents;
}(React.Component);

var _default = NewsAndEvents;
exports.default = _default;