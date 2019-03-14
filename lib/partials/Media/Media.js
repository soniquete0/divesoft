"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ImgWithFallback = _interopRequireDefault(require("./components/ImgWithFallback"));

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

var Media =
/** @class */
function (_super) {
  __extends(Media, _super);

  function Media(props) {
    var _this = _super.call(this, props) || this;

    _this.renderAsImage = function (data) {
      var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

      if (data && data.filename) {
        var recommendedSizes = data && data.recommendedSizes || null;
        var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
        return React.createElement(_ImgWithFallback.default, {
          originalSrc: originalUrl,
          alt: data.alt || '',
          baseUrl: baseUrl,
          recommendedSizes: recommendedSizes,
          originalData: data,
          hash: data.hash,
          class: _this.props.class
        });
      } else {
        return null;
      }
    };

    return _this;
  }

  Media.prototype.renderAsVideoEmbed = function (data) {
    var embedUrl = data.url;
    return React.createElement("div", {
      className: "mediaRatio mediaRatio--video " + this.props.class,
      style: {
        paddingTop: parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) / parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10) * 100 + "%"
      }
    }, React.createElement("iframe", {
      className: "mediaEmbeddedVideo inner",
      src: embedUrl,
      allowFullScreen: true,
      frameBorder: "0"
    }));
  };

  Media.prototype.render = function () {
    var data = this.props.data;

    switch (data && data.type) {
      case 'image':
        return this.renderAsImage(data);

      case 'embeddedVideo':
        return this.renderAsVideoEmbed(data);

      default:
        return this.renderAsImage(data);
      // default:
      //   return <div className={'mediaError'}>There was an error rendering media.</div>;
    }
  };

  return Media;
}(React.Component);

var _default = Media;
exports.default = _default;