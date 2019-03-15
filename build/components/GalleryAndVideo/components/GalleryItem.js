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
import Media from '@source/partials/Media';
var GalleryItem = /** @class */ (function (_super) {
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
        var _a = this.props, image = _a.image, keyIndex = _a.keyIndex, gridClasses = _a.gridClasses;
        return (React.createElement("div", { key: keyIndex, className: "galleryAndVideo__content__img " + gridClasses, onClick: function () { return _this.setState({ fullScreen: !_this.state.fullScreen }); } },
            React.createElement(Media, { data: image, type: 'image', class: this.state.fullScreen ?
                    'galleryAndVideo__content__img--fullScreen' : '' })));
    };
    return GalleryItem;
}(React.Component));
export default GalleryItem;
//# sourceMappingURL=GalleryItem.js.map