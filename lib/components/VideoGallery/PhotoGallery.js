"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

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

var PhotoGallery =
/** @class */
function (_super) {
  __extends(PhotoGallery, _super);

  function PhotoGallery(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      showMore: false
    };
    return _this;
  }

  PhotoGallery.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        description = _a.description,
        divider = _a.divider,
        videos = _a.videos;
    return _react.default.createElement(_List.default, {
      data: videos
    }, function (_a) {
      var data = _a.data;
      return _react.default.createElement("div", {
        className: "videoGallery"
      }, _react.default.createElement("div", {
        className: 'container'
      }, title && _react.default.createElement("h2", null, title), description && _react.default.createElement("h4", null, description), _react.default.createElement("div", {
        className: "row"
      }, data && data.length < 8 && data.map(function (item, i) {
        return 1;
      }), data && data.length >= 8 && data.slice(0, 8).map(function (item, i) {
        return 1;
      }), _this.state.showMore && data.slice(8, data.length).map(function (item, i) {
        return 1;
      })), data && data.length > 8 && _react.default.createElement("button", {
        className: 'btn',
        onClick: function onClick() {
          return _this.setState({
            showMore: !_this.state.showMore
          });
        }
      }, _this.state.showMore ? 'Show less' : 'Show more'), divider && _react.default.createElement("div", {
        className: 'videoGallery__divider'
      })));
    });
  };

  return PhotoGallery;
}(_react.default.Component);

var _default = PhotoGallery;
exports.default = _default;