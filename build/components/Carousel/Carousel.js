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
import List from '../List';
import Button from '@source/partials/Button';
import Slider from '@source/partials/Slider';
import Media from '@source/partials/Media';
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillReceiveProps = function (nextProps) {
            if (_this.state.slides !== nextProps.data.slides) {
                _this.setState({ slides: nextProps.data.slides });
            }
        };
        _this.state = {
            slides: _this.props.data.slides,
        };
        return _this;
    }
    Carousel.prototype.renderSlides = function (data) {
        if (data.length < 1) {
            return;
        }
        var result = [];
        data.map(function (slide, i) {
            result.push(React.createElement("div", { className: 'carousel__images__img' },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: "carousel__images__img__content " + (slide.isCentred ? 'center' : '') },
                        slide.subTitle &&
                            React.createElement("h2", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.subTitle),
                        slide.title &&
                            React.createElement("h1", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.title),
                        React.createElement("p", null, slide.description),
                        slide.buttonTitle &&
                            React.createElement("div", { className: 'carousel__images__img__content__btnHolder', style: slide.isCentred ? { margin: '0 auto' } : {} },
                                React.createElement(Button, { classes: (slide.isBackgroundBlack ? '' : 'btn--bordered') + " \n                              " + (slide.isCentred ? 'btn--center' : ''), url: slide.url }, slide.buttonTitle)))),
                slide.image && React.createElement(Media, { type: 'image', data: slide.image })));
        });
        return result;
    };
    Carousel.prototype.render = function () {
        var _this = this;
        return (React.createElement(List, { data: this.state.slides }, function (_a) {
            var data = _a.data;
            return React.createElement(Slider, { delay: 3000, slides: _this.renderSlides(data), wrapperClasses: 'sliderAtTop', autoplay: _this.state.slides.length <= 1 ? false : true, showDots: _this.state.slides.length <= 1 ? false : true, showArrows: _this.state.slides.length <= 1 ? false : true });
        }));
    };
    return Carousel;
}(React.Component));
export default Carousel;
//# sourceMappingURL=Carousel.js.map