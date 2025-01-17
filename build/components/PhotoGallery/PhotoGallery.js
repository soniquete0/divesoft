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
var react_images_1 = require("react-images");
var List_1 = require("../List");
var Media_1 = require("../../partials/Media");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var PhotoGallery = /** @class */ (function (_super) {
    __extends(PhotoGallery, _super);
    function PhotoGallery(props) {
        var _this = _super.call(this, props) || this;
        _this.renderGallery = function (data) {
            if (!data) {
                return;
            }
            var gallery = data.map(function (item, i) {
                return (React.createElement("div", { key: i, className: "photoGallery__img col-6 col-md-3", onClick: function (e) { return _this.openLightbox(i, e); } },
                    React.createElement(Media_1.default, { data: item.img, type: 'image' })));
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
                    src: getImageUrl_1.default(item.img)
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
            lightboxIsOpen: false,
            imageUrls: _this.getImageUrls()
        };
        return _this;
    }
    PhotoGallery.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, description = _a.description, divider = _a.divider, images = _a.images;
        return (React.createElement(List_1.default, { data: images }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 8), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: "photoGallery" },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h2", null, title),
                    description && React.createElement("h4", null, description),
                    React.createElement(react_images_1.default, { images: _this.state.imageUrls, isOpen: _this.state.lightboxIsOpen, currentImage: _this.state.currentImage, onClickPrev: _this.gotoPrevious, onClickNext: _this.gotoNext, onClose: _this.closeLightbox }),
                    _this.renderGallery(items),
                    _this.state.numberOfPage < lastPage &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "Show more"),
                    divider && React.createElement("div", { className: 'photoGallery__divider' }))));
        }));
    };
    return PhotoGallery;
}(React.Component));
exports.default = PhotoGallery;
//# sourceMappingURL=PhotoGallery.js.map