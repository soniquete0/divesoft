"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Media = _interopRequireDefault(require("../../../../lib/partials/Media"));

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

var GalleryItem =
/** @class */
function (_super) {
  __extends(GalleryItem, _super);

  function GalleryItem(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      fullScreen: false
    };
    return _this;
  }

  GalleryItem.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        wrapperClasses = _a.wrapperClasses;
    return _react.default.createElement("div", {
      className: "photoGallery__img " + wrapperClasses,
      onClick: function onClick() {
        return _this.setState({
          fullScreen: !_this.state.fullScreen
        });
      }
    }, _react.default.createElement(_Media.default, {
      data: image,
      type: 'image',
      class: this.state.fullScreen ? 'photoGallery__img--fullScreen' : ''
    }));
  };

  return GalleryItem;
}(_react.default.Component);

var _default = GalleryItem;
exports.default = _default;