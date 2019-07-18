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
var Media_1 = require("../../partials/Media");
var ProductMountrouter_1 = require("../ProductMountRouter/ProductMountrouter");
var Testimonials = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, testimonials = _a.testimonials;
    return (React.createElement("div", null,
        React.createElement(List_1.default, { data: testimonials || [] }, function (_a) {
            var slides = _a.data;
            var arrayOfSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i },
                React.createElement("div", { className: 'testimonials__list__item' },
                    slide.img && React.createElement(Media_1.default, { type: 'image', data: slide.img }),
                    slide.title && React.createElement("h4", null, slide.title),
                    slide.from && React.createElement("span", null, slide.from),
                    slide.text && React.createElement("p", null, slide.text)))); })) || [];
            var settings = {
                speed: 1000,
                dots: false,
                arrows: true,
                autoplay: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: { slidesToShow: 2 }
                    },
                    {
                        breakpoint: 768,
                        settings: { slidesToShow: 1 }
                    }
                ]
            };
            return (React.createElement("div", { className: 'testimonials' },
                React.createElement("div", { className: "container" },
                    title && React.createElement("h2", null, title),
                    description && React.createElement("p", { className: 'testimonials__description textDescription' }, description),
                    React.createElement("div", { className: 'testimonials__list' },
                        React.createElement(react_slick_1.default, __assign({}, settings), arrayOfSlides)))));
        }),
        React.createElement(ProductMountrouter_1.default, { headline: "blabla" })));
};
exports.default = Testimonials;
//# sourceMappingURL=Testimonials.js.map