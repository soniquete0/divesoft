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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_images_1 = require("react-images");
var react_responsive_1 = require("react-responsive");
var List_1 = require("../List");
var Media_1 = require("@source/partials/Media");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var GalleryAndVideo = /** @class */ (function (_super) {
    __extends(GalleryAndVideo, _super);
    function GalleryAndVideo(props) {
        var _this = _super.call(this, props) || this;
        _this.renderGallery = function (data) {
            if (!data) {
                return;
            }
            var gallery = data.map(function (item, i) {
                return (React.createElement("div", { key: i, className: "galleryAndVideo__content__image col-6", onClick: function (e) { return _this.openLightbox(i, e); } },
                    React.createElement(Media_1.default, { data: item.image, type: 'image' })));
            });
            return React.createElement("div", { className: "row" }, gallery);
        };
        _this.getImageUrls = function () {
            var images = _this.props.data.images;
            if (!images) {
                return;
            }
            var result = [];
            images.map(function (item, i) {
                result[i] = {
                    src: getImageUrl_1.default(item.image)
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
        _this.gotoPrevious = function () { return _this.setState({ currentImage: _this.state.currentImage - 1 }); };
        _this.gotoNext = function () { return _this.setState({ currentImage: _this.state.currentImage + 1 }); };
        _this.gotoImage = function (index) { return _this.setState({ currentImage: index }); };
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
    GalleryAndVideo.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, video = _a.video, images = _a.images;
        var Mobile = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { maxWidth: 1199 })); };
        return (React.createElement(List_1.default, { data: images }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 4), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'galleryAndVideo' },
                React.createElement("div", { className: "container" },
                    title && React.createElement("h2", null, title),
                    React.createElement(react_images_1.default, { images: _this.state.imageUrls, isOpen: _this.state.lightboxIsOpen, currentImage: _this.state.currentImage, onClickPrev: _this.gotoPrevious, onClickNext: _this.gotoNext, onClose: _this.closeLightbox }),
                    React.createElement("div", { className: 'row galleryAndVideo__content' },
                        React.createElement("div", { className: "col" }, video && React.createElement(Media_1.default, { type: 'embeddedVideo', data: video })),
                        React.createElement("div", { className: "col" }, _this.renderGallery(items))),
                    React.createElement(Mobile, null, _this.state.numberOfPage < lastPage &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({
                                numberOfPage: _this.state.numberOfPage + 1
                            }); } }, "Show more")))));
        }));
    };
    return GalleryAndVideo;
}(React.Component));
exports.default = GalleryAndVideo;
//# sourceMappingURL=GalleryAndVideo.js.map