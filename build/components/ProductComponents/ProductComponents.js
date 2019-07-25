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
var react_responsive_1 = require("react-responsive");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var Mobile = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { maxWidth: 767 })); };
var Default = function (props) { return React.createElement(react_responsive_1.default, __assign({}, props, { minWidth: 768 })); };
var ProductComponents = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, columns = _a.columns, components = _a.components;
    return (React.createElement(List_1.default, { data: components || [] }, function (_a) {
        var slides = _a.data;
        var arrayOfMobileSlides = (slides && slides.map(function (slide, i) { return (React.createElement("div", { key: i },
            React.createElement("div", { className: 'productComponents__mobileItem' },
                React.createElement(Media_1.default, { type: 'image', data: slide.image }),
                slide.title && React.createElement("h5", null, slide.title),
                slide.description && React.createElement("p", null, slide.description),
                React.createElement(Link_1.default, __assign({}, slide.url), "More information")))); })) || [];
        var settings = {
            speed: 1000,
            dots: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
        };
        return (React.createElement("div", { className: 'productComponents' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h2", null, title),
                description && React.createElement("p", { className: 'textDescription' }, description),
                React.createElement(Default, null,
                    React.createElement("div", { className: 'productComponents__list row' }, slides && slides.map(function (item, i) { return (React.createElement("div", { key: i, className: "col-12 col-md-6 " + columns },
                        React.createElement("div", { className: 'productComponents__list__item' },
                            React.createElement(Media_1.default, { type: 'image', data: item.image, width: "130", height: "130" }),
                            React.createElement("div", { className: 'productComponents__list__item__content' },
                                React.createElement("h5", null, item.title),
                                React.createElement("p", null, item.description),
                                React.createElement(Link_1.default, __assign({}, item.url), "More information"))))); }))),
                React.createElement(Mobile, null,
                    React.createElement(react_slick_1.default, __assign({}, settings), arrayOfMobileSlides)))));
    }));
};
exports.default = ProductComponents;
//# sourceMappingURL=ProductComponents.js.map