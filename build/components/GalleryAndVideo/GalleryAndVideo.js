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
var GalleryAndVideo = /** @class */ (function (_super) {
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
        var _a = this.props.data, title = _a.title, video = _a.video, images = _a.images;
        return (React.createElement(List, { data: images }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'galleryAndVideo' },
                React.createElement("div", { className: "container" },
                    title && React.createElement("h2", null, title),
                    React.createElement("div", { className: 'row galleryAndVideo__content' },
                        React.createElement("div", { className: "col" }, video && React.createElement(Media, { type: 'embeddedVideo', data: video })),
                        React.createElement("div", { className: "col" },
                            React.createElement("div", { className: "row" }, data && data.length >= 2 && data.slice(0, 2).map(function (item, i) { return (React.createElement("div", { key: i, className: 'galleryAndVideo__content__img col-12 col-md-6' },
                                React.createElement(Media, { type: 'image', data: item.image }))); })),
                            React.createElement("div", { className: "row" }, data && data.length >= 4 && data.slice(2, 4).map(function (item, i) { return (React.createElement("div", { key: i, className: 'galleryAndVideo__content__img col-12 col-md-6' },
                                React.createElement(Media, { type: 'image', data: item.image }))); })))),
                    _this.state.showMore &&
                        React.createElement("div", { className: "row", style: { marginTop: 15 } }, data.slice(4, data.length - 1).map(function (item, i) { return (React.createElement("div", { key: i, className: 'galleryAndVideo__more col-12 col-md-6 col-xl-3' },
                            React.createElement(Media, { type: 'image', data: item.image }))); })),
                    data && data.length > 4 &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({ showMore: !_this.state.showMore }); } }, "Show more"))));
        }));
    };
    return GalleryAndVideo;
}(React.Component));
export default GalleryAndVideo;
//# sourceMappingURL=GalleryAndVideo.js.map