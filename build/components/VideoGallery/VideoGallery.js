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
import React from 'react';
import List from '../List';
import Media from '@source/partials/Media';
var VideoGallery = /** @class */ (function (_super) {
    __extends(VideoGallery, _super);
    function VideoGallery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showMore: false
        };
        return _this;
    }
    VideoGallery.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, description = _a.description, divider = _a.divider, videos = _a.videos;
        return (React.createElement(List, { data: videos }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: "videoGallery" },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h2", null, title),
                    description &&
                        React.createElement("h4", { className: 'videoGallery__description' }, description),
                    React.createElement("div", { className: "row" },
                        data && data.length < 3 && data.map(function (item, i) { return (React.createElement("div", { key: i, className: "col-12 col-md-4" },
                            React.createElement("div", { className: 'videoGallery__item' },
                                item.video && React.createElement(Media, { type: 'embeddedVideo', data: item.video }),
                                React.createElement("h4", null, item.title),
                                React.createElement("p", null, item.text)))); }),
                        data && data.length >= 3 && data.slice(0, 3).map(function (item, i) { return (React.createElement("div", { key: i, className: "col-12 col-md-4" },
                            React.createElement("div", { className: 'videoGallery__item' },
                                item.video && React.createElement(Media, { type: 'embeddedVideo', data: item.video }),
                                React.createElement("h4", null, item.title),
                                React.createElement("p", null, item.text)))); }),
                        _this.state.showMore &&
                            data.slice(3, data.length).map(function (item, i) { return (React.createElement("div", { key: i, className: "col-12 col-md-4" },
                                React.createElement("div", { className: 'videoGallery__item' },
                                    item.video && React.createElement(Media, { type: 'embeddedVideo', data: item.video }),
                                    React.createElement("h4", null, item.title),
                                    React.createElement("p", null, item.text)))); })),
                    data && data.length > 3 &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({ showMore: !_this.state.showMore }); } }, _this.state.showMore ? 'Show less' : 'Show more'),
                    divider && React.createElement("div", { className: 'videoGallery__divider' }))));
        }));
    };
    return VideoGallery;
}(React.Component));
export default VideoGallery;
//# sourceMappingURL=VideoGallery.js.map