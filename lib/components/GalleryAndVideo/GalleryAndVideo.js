"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _GalleryItem = _interopRequireDefault(require("./components/GalleryItem"));

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

var GalleryAndVideo =
/** @class */
function (_super) {
  __extends(GalleryAndVideo, _super);

  function GalleryAndVideo(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      showMore: false
    };
    return _this;
  }

  GalleryAndVideo.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        video = _a.video,
        images = _a.images;
    return _react.default.createElement(_List.default, {
      data: images
    }, function (_a) {
      var data = _a.data;
      return _react.default.createElement("div", {
        className: 'galleryAndVideo'
      }, _react.default.createElement("div", {
        className: "container"
      }, title && _react.default.createElement("h2", null, title), _react.default.createElement("div", {
        className: 'row galleryAndVideo__content'
      }, _react.default.createElement("div", {
        className: "col"
      }, video && _react.default.createElement(_Media.default, {
        type: 'embeddedVideo',
        data: video
      })), _react.default.createElement("div", {
        className: "col"
      }, data.length < 4 && _react.default.createElement("div", {
        className: "row"
      }, data && data.map(function (item, i) {
        return _react.default.createElement(_GalleryItem.default, {
          keyIndex: i,
          image: item.image,
          gridClasses: 'col-6 col-md-3 col-xl-6'
        });
      })), _react.default.createElement("div", {
        className: "row"
      }, data && data.length >= 4 && data.slice(0, 4).map(function (item, i) {
        return _react.default.createElement(_GalleryItem.default, {
          keyIndex: i,
          image: item.image,
          gridClasses: 'col-6 col-md-3 col-xl-6'
        });
      })))), _this.state.showMore && _react.default.createElement("div", {
        className: "row"
      }, data.slice(4, data.length - 1).map(function (item, i) {
        return _react.default.createElement(_GalleryItem.default, {
          keyIndex: i,
          image: item.image,
          gridClasses: 'col-6 col-md-3'
        });
      })), data && data.length > 4 && _react.default.createElement("button", {
        className: 'btn',
        onClick: function onClick() {
          return _this.setState({
            showMore: !_this.state.showMore
          });
        }
      }, _this.state.showMore ? 'Show less' : 'Show more')));
    });
  };

  return GalleryAndVideo;
}(_react.default.Component);

var _default = GalleryAndVideo;
exports.default = _default;