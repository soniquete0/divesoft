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
import GalleryItem from './components/GalleryItem';
var PhotoGallery = /** @class */ (function (_super) {
    __extends(PhotoGallery, _super);
    function PhotoGallery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showMore: false
        };
        return _this;
    }
    PhotoGallery.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, description = _a.description, divider = _a.divider, images = _a.images;
        return (React.createElement(List, { data: images }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: "photoGallery" },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h2", null, title),
                    description && React.createElement("h4", null, description),
                    React.createElement("div", { className: "row" },
                        data && data.length < 8 && data.map(function (item, i) { return (React.createElement(GalleryItem, { key: i, image: item.img, wrapperClasses: 'col-6 col-md-3' })); }),
                        data && data.length >= 8 && data.slice(0, 8).map(function (item, i) { return (React.createElement(GalleryItem, { key: i, image: item.img, wrapperClasses: 'col-6 col-md-3' })); }),
                        _this.state.showMore &&
                            data.slice(8, data.length).map(function (item, i) { return (React.createElement(GalleryItem, { key: data.length + i, image: item.img, wrapperClasses: 'col-6 col-md-3' })); })),
                    data && data.length > 8 &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({ showMore: !_this.state.showMore }); } }, _this.state.showMore ? 'Show less' : 'Show more'),
                    divider && React.createElement("div", { className: 'photoGallery__divider' }))));
        }));
    };
    return PhotoGallery;
}(React.Component));
export default PhotoGallery;
//# sourceMappingURL=PhotoGallery.js.map