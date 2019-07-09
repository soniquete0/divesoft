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
var ReactMarkdown = require("react-markdown");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var NextArrow_1 = require("../../partials/NextArrow");
var PrevArrow_1 = require("../../partials/PrevArrow");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var isOneSlide = function (slidesArray) { return slidesArray.length === 1 ? true : false; };
var SpecialCarousel = function (props) { return (React.createElement(List_1.default, { data: props.data.slides || [] }, function (_a) {
    var slides = _a.data;
    var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i },
        React.createElement("div", { className: "specialCarousel " + (isOneSlide(slides) ? 'oneSlide' : ''), style: { backgroundImage: slide.image && "url(" + getImageUrl_1.default(slide.image) + ")" } },
            React.createElement("div", { className: "specialCarousel__content" },
                React.createElement("div", { className: "container" },
                    slide.title &&
                        React.createElement("h2", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.title),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "specialCarousel__content__info col-12 col-md-8 col-lg-8 col-xl-6" },
                            slide.subTitle &&
                                React.createElement("h3", { style: slide.isBackgroundBlack ? { color: 'white' } : {} },
                                    isOneSlide(slides) ? '' : React.createElement("span", { style: { color: '#e50000' } }, "0" + (i + 1) + ". "),
                                    slide.subTitle),
                            slide.description &&
                                React.createElement("div", { className: "specialCarousel__content__info__description" }, slide.description && React.createElement(ReactMarkdown, { source: slide.description })),
                            React.createElement("div", { className: 'specialCarousel__content__downloads' },
                                React.createElement("div", { className: 'specialCarousel__content__downloads__item' },
                                    React.createElement(Link_1.default, __assign({}, slide.firstUrl),
                                        React.createElement(Media_1.default, { type: 'image', data: slide.firstDocImg })),
                                    slide.firstUrl && React.createElement("p", null, slide.firstDocText)),
                                React.createElement("div", { className: 'specialCarousel__content__downloads__item' },
                                    React.createElement(Link_1.default, __assign({}, slide.secondUrl),
                                        React.createElement(Media_1.default, { type: 'image', data: slide.secondDocImg })),
                                    slide.secondUrl && React.createElement("p", null, slide.secondDocText)))),
                        React.createElement("div", { className: "specialCarousel__content__info col-12 col-md-4 col-lg-4 col-xl-6" },
                            React.createElement("div", { style: { display: 'table', height: '100%', width: '100%' } },
                                React.createElement("div", { style: { display: 'table-cell', verticalAlign: 'middle' } },
                                    React.createElement(Media_1.default, { type: 'image', data: slide.productImg })))))))))); })) || [];
    var settings = {
        speed: 1000,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: React.createElement(NextArrow_1.default, { classes: 'carousel--nextArrow' }),
        prevArrow: React.createElement(PrevArrow_1.default, { classes: 'carousel--prevArrow' })
    };
    return React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides);
})); };
exports.default = SpecialCarousel;
//# sourceMappingURL=SpecialCarousel.js.map