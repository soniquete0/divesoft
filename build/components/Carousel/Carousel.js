"use strict";
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
var react_slick_1 = require("react-slick");
var List_1 = require("../List");
var Button_1 = require("../../partials/Button");
var NextArrow_1 = require("../../partials/NextArrow");
var PrevArrow_1 = require("../../partials/PrevArrow");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var Carousel = function (props) { return (React.createElement(List_1.default, { data: props.data.slides || [] }, function (_a) {
    var slides = _a.data;
    var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i },
        React.createElement("div", { className: 'carousel', style: { backgroundImage: slide.image && "url(" + getImageUrl_1.default(slide.image) + ")" } },
            React.createElement("div", { className: 'container', style: { height: '100%' } },
                React.createElement("div", { className: 'carousel__contentWrapper' },
                    React.createElement("div", { className: "carousel__content " + (slide.isCentred ? 'center' : '') },
                        slide.subTitle &&
                            React.createElement("h2", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.subTitle),
                        slide.title &&
                            React.createElement("h1", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.title),
                        React.createElement("p", null, slide.description),
                        slide.buttonTitle &&
                            React.createElement("div", { className: 'carousel__content__btnHolder', style: slide.isCentred ? { margin: '0 auto' } : {} },
                                React.createElement(Button_1.default, { classes: (slide.isBackgroundBlack ? '' : 'btn--bordered') + "\n                                  " + (slide.isCentred ? 'btn--center' : ''), url: slide.url }, slide.buttonTitle)))))))); })) || [];
    var settings = {
        speed: 1000,
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: React.createElement(NextArrow_1.default, { classes: 'carousel--nextArrow' }),
        prevArrow: React.createElement(PrevArrow_1.default, { classes: 'carousel--prevArrow' })
    };
    return (React.createElement("div", { className: "sliderAtTop" },
        React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides)));
})); };
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map