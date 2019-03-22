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
import Button from '@source/partials/Button';
import Slider from '@source/partials/Slider';
import Media from '@source/partials/Media';
import List from '../List';
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            galleryItems: _this.galleryItems(),
        };
        return _this;
    }
    Carousel.prototype.galleryItems = function () {
        var slides = this.props.data.slides;
        var images = [];
        if (slides) {
            slides.map(function (slide, i) {
                if (slide.image) {
                    images.push(React.createElement("div", { className: 'carousel__images__img' },
                        React.createElement("div", { className: 'container' },
                            React.createElement("div", { className: "carousel__images__img__content " + (slide.isCentred ? 'center' : '') },
                                slide.subTitle &&
                                    React.createElement("h2", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.subTitle),
                                slide.title &&
                                    React.createElement("h1", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.title),
                                React.createElement("p", null, slide.description),
                                slide.buttonTitle &&
                                    React.createElement("div", { className: 'carousel__images__img__content__btnHolder', style: slide.isCentred ? { margin: '0 auto' } : {} },
                                        React.createElement(Button, { classes: (slide.isBackgroundBlack ? '' : 'btn--bordered') + " \n                                  " + (slide.isCentred ? 'btn--center' : ''), url: slide.url }, slide.buttonTitle)))),
                        React.createElement(Media, { key: i, type: 'image', data: slide.image })));
                }
            });
        }
        return images;
    };
    Carousel.prototype.render = function () {
        var _this = this;
        return (React.createElement(List, { data: this.state.galleryItems }, function (_a) {
            var data = _a.data;
            return React.createElement(Slider, { delay: 10000, slides: data, wrapperClasses: 'sliderAtTop', autoplay: _this.state.galleryItems.length <= 1 ? false : true, showDots: _this.state.galleryItems.length <= 1 ? false : true, showArrows: _this.state.galleryItems.length <= 1 ? false : true });
        }));
    };
    return Carousel;
}(React.Component));
export default Carousel;
//# sourceMappingURL=Carousel.js.map