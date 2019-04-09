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
import * as React from 'react';
import ImgWithFallback from './components/ImgWithFallback';
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(props) {
        var _this = _super.call(this, props) || this;
        _this.setDimensions = function (recommendedSizes) {
            var result = null;
            if (recommendedSizes === null) {
                result = {
                    width: _this.props.width,
                    height: _this.props.height
                };
            }
            return result;
        };
        _this.renderAsImage = function (data) {
            var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            if (data && data.filename) {
                var recommendedSizes = (data && data.recommendedSizes) || null;
                var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
                _this.setDimensions(recommendedSizes);
                return (React.createElement(ImgWithFallback, { originalSrc: originalUrl, alt: data.alt || '', baseUrl: baseUrl, recommendedSizes: recommendedSizes, originalData: data, hash: data.hash, class: _this.props.class }));
            }
            else {
                return null;
            }
        };
        return _this;
    }
    Media.prototype.renderAsVideoEmbed = function (data) {
        var embedUrl = data.url;
        return (React.createElement("div", { className: "mediaRatio mediaRatio--video " + this.props.class, style: {
                paddingTop: (parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
                    parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
                    100 + "%",
            } },
            React.createElement("iframe", { className: "mediaEmbeddedVideo inner", src: embedUrl, allowFullScreen: true, frameBorder: "0" })));
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
}(React.Component));
export default Media;
//# sourceMappingURL=Media.js.map