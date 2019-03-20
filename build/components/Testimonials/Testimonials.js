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
import React from 'react';
import Responsive from 'react-responsive';
import List from '../List';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 767 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 768 })); };
var Testimonials = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, testimonials = _a.testimonials;
    return (React.createElement(List, { data: testimonials }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'testimonials' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h2", null, title),
                description && React.createElement("p", { className: 'testimonials__description' }, description),
                React.createElement(Default, null,
                    React.createElement("div", { className: 'testimonials__list' },
                        React.createElement("div", { className: "row" }, data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-md-4' },
                            React.createElement("div", { className: 'testimonials__list__item' },
                                item.img && React.createElement(Media, { type: 'image', data: item.img }),
                                item.title && React.createElement("h4", null, item.title),
                                item.from && React.createElement("span", null, item.from),
                                item.text && React.createElement("p", null, item.text)))); })))),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { slides: data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12' },
                            React.createElement("div", { className: 'testimonials__list__item' },
                                item.img && React.createElement(Media, { type: 'image', data: item.img }),
                                item.title && React.createElement("h4", null, item.title),
                                item.from && React.createElement("span", null, item.from),
                                item.text && React.createElement("p", null, item.text)))); }), delay: 7000, showArrows: data.length > 1 ? true : false, autoplay: data.length > 1 ? true : false, isFullWidth: false })))));
    }));
};
export default Testimonials;
//# sourceMappingURL=Testimonials.js.map