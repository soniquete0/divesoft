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
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from '@source/partials/Button';
import Media from '@source/partials/Media';
import List from '../List';
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.slideTo = function (i) {
            _this.setState({ currentIndex: i });
        };
        _this.state = {
            currentIndex: 0,
            itemsInSlide: 1,
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
                                slide.description && React.createElement("p", null, slide.description),
                                slide.buttonTitle &&
                                    React.createElement("div", { className: 'carousel__images__img__content__btnHolder', style: slide.isCentred ? { maxWidth: '50%', margin: '0 auto' } : {} },
                                        React.createElement(Button, { classes: (slide.isBackgroundBlack ? '' : 'btn--bordered') + " \n                                  " + (slide.isCentred ? 'btn--center' : ''), url: slide.url }, slide.buttonTitle)))),
                        React.createElement(Media, { key: i, type: 'image', data: slide.image })));
                }
            });
        }
        return images;
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var slides = this.props.data.slides;
        return (React.createElement(List, { data: slides }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'carousel' },
                React.createElement("div", { className: 'carousel__images' },
                    React.createElement(AliceCarousel, { autoPlay: true, dotsDisabled: false, buttonsDisabled: true, autoPlayInterval: 10000, infinite: false, items: _this.state.galleryItems, onSlideChanged: function (e) {
                            _this.setState({ currentIndex: e.item });
                        }, slideToIndex: _this.state.currentIndex }))));
        }));
    };
    return Carousel;
}(React.Component));
export default Carousel;
//# sourceMappingURL=Carousel.js.map