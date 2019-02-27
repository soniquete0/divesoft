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
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
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
                    images.push(React.createElement(Link, { url: slide.url && slide.url.url },
                        React.createElement(Media, { key: i, type: 'image', data: slide.image })));
                }
            });
        }
        return images;
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, slides = _a.slides, displayOnTop = _a.displayOnTop;
        return (React.createElement(List, { data: slides }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'carousel' },
                displayOnTop ? React.createElement("div", { className: 'carousel__divider' }) : '',
                React.createElement("div", { className: 'carousel__images', style: displayOnTop ? {} : { gridRow: 'auto' } },
                    React.createElement(AliceCarousel, { autoPlay: true, dotsDisabled: true, buttonsDisabled: true, autoPlayInterval: 10000, items: _this.state.galleryItems, onSlideChanged: function (e) {
                            _this.setState({ currentIndex: e.item });
                        }, slideToIndex: _this.state.currentIndex })),
                React.createElement("div", { className: 'carousel__titles', style: displayOnTop ? {} : { gridRow: 'auto' } },
                    React.createElement("ul", { className: 'carousel__titles__list' }, slides && slides.map(function (slide, i) { return (React.createElement("li", { key: i, onClick: function () { return _this.slideTo(i); }, className: 'carousel__titles__list__item', style: i === _this.state.currentIndex ? {
                            color: '#3eac49',
                            fontWeight: 700,
                            backgroundColor: 'white',
                            boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
                            borderBottom: 'none !important'
                        } : {} },
                        React.createElement("span", null, slide.title && slide.title))); })))));
        }));
    };
    return Carousel;
}(React.Component));
export default Carousel;
//# sourceMappingURL=Carousel.js.map