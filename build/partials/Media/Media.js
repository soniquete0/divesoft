"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ImgWithFallback_1 = require("./components/ImgWithFallback/");
var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(props) {
        var _this = _super.call(this, props) || this;
        _this.setDimensions = function (recommendedSizes) {
            var _a = _this.props, width = _a.width, height = _a.height;
            if (width && height) {
                return {
                    width: width,
                    height: height
                };
            }
            return recommendedSizes;
        };
        _this.renderAsImage = function (data) {
            if (data && data.filename) {
                var recommendedSizes = (data && data.recommendedSizes) || null;
                var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
                recommendedSizes = _this.setDimensions(recommendedSizes);
                return (React.createElement(ImgWithFallback_1.default, { originalSrc: originalUrl, alt: data.alt || '', baseUrl: baseUrl, recommendedSizes: recommendedSizes, originalData: data, hash: data.hash, className: _this.props.className }));
            }
            else {
                return null;
            }
        };
        return _this;
    }
    Media.prototype.renderAsVideoEmbed = function (data) {
        var embedUrl = data.url;
        return (React.createElement("div", { className: "mediaRatio mediaRatio--video " + this.props.className, style: {
                paddingTop: (parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
                    parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
                    100 + "%"
            } },
            React.createElement("iframe", { className: "mediaEmbeddedVideo inner", src: embedUrl, allowFullScreen: true, frameBorder: "0" })));
    };
    Media.prototype.renderAsFile = function (data) {
        var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
        return (React.createElement("div", { className: 'fileDownload__holder' },
            React.createElement("a", { className: 'roundButton roundButton--red', href: originalUrl }, "File")));
    };
    Media.prototype.render = function () {
        var data = this.props.data;
        switch (data && data.type) {
            case 'image':
                return this.renderAsImage(data);
            case 'embeddedVideo':
                return this.renderAsVideoEmbed(data);
            case 'file':
                return this.renderAsFile(data);
            default:
                return this.renderAsImage(data);
            // default:
            //   return <div className={'mediaError'}>There was an error rendering media.</div>;
        }
    };
    return Media;
}(React.Component));
exports.default = Media;
//# sourceMappingURL=Media.js.map