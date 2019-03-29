"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactImages = _interopRequireDefault(require("react-images"));

var _List = _interopRequireDefault(require("../List"));

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

var PhotoGallery =
/** @class */
function (_super) {
  __extends(PhotoGallery, _super);

  function PhotoGallery(props) {
    var _this = _super.call(this, props) || this;

    _this.renderGallery = function (data) {
      if (!data) {
        return;
      }

      var gallery = data.map(function (item, i) {
        return _react.default.createElement("div", {
          key: i,
          className: "photoGallery__img col-6 col-md-3",
          onClick: function onClick(e) {
            return _this.openLightbox(i, e);
          }
        }, _react.default.createElement(_Media.default, {
          data: item.img,
          type: 'image'
        }));
      });
      return _react.default.createElement("div", {
        className: "row"
      }, gallery);
    };

    _this.getImageUrls = function () {
      var images = _this.props.data.images;

      if (!images) {
        return;
      }

      var result = [];
      images.map(function (item, i) {
        result[i] = {
          src: (0, _getImageUrl.default)(item.img)
        };
      });
      return result;
    };

    _this.openLightbox = function (index, event) {
      event.preventDefault();

      _this.setState({
        currentImage: index,
        lightboxIsOpen: true
      });
    };

    _this.closeLightbox = function () {
      _this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    };

    _this.gotoPrevious = function () {
      return _this.setState({
        currentImage: _this.state.currentImage - 1
      });
    };

    _this.gotoNext = function () {
      return _this.setState({
        currentImage: _this.state.currentImage + 1
      });
    };

    _this.gotoImage = function (index) {
      return _this.setState({
        currentImage: index
      });
    };

    _this.handleClickImage = function () {
      if (_this.state.currentImage === _this.state.imageUrls.length - 1) {
        return;
      }

      _this.gotoNext();
    };

    _this.state = {
      currentImage: 0,
      numberOfPage: 1,
      showMore: false,
      lightboxIsOpen: false,
      imageUrls: _this.getImageUrls()
    };
    return _this;
  }

  PhotoGallery.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        description = _a.description,
        divider = _a.divider,
        images = _a.images;
    return _react.default.createElement(_List.default, {
      data: images
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 8),
          items = _b.items,
          lastPage = _b.lastPage;

      return _react.default.createElement("div", {
        className: "photoGallery"
      }, _react.default.createElement("div", {
        className: 'container'
      }, title && _react.default.createElement("h2", null, title), description && _react.default.createElement("h4", null, description), _react.default.createElement(_reactImages.default, {
        images: _this.state.imageUrls,
        isOpen: _this.state.lightboxIsOpen,
        currentImage: _this.state.currentImage,
        onClickPrev: _this.gotoPrevious,
        onClickNext: _this.gotoNext,
        onClose: _this.closeLightbox
      }), _this.renderGallery(items), _this.state.numberOfPage < lastPage && _react.default.createElement("button", {
        className: 'btn',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "Show more"), divider && _react.default.createElement("div", {
        className: 'photoGallery__divider'
      })));
    });
  };

  return PhotoGallery;
}(_react.default.Component);

var _default = PhotoGallery;
exports.default = _default;