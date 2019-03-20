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
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
var Mobile = function (props) { return React.createElement(Responsive, __assign({}, props, { maxWidth: 767 })); };
var Default = function (props) { return React.createElement(Responsive, __assign({}, props, { minWidth: 768 })); };
var ProductComponents = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, components = _a.components;
    var mobileViews = [];
    for (var i = 0; i < components.length; i++) {
        mobileViews.push(React.createElement("div", { key: i, className: 'productComponents__mobileItem' },
            React.createElement(Media, { type: 'image', data: components[i].image }),
            components[i].title && React.createElement("h5", null, components[i].title),
            components[i].description && React.createElement("p", null, components[i].description),
            React.createElement(Link, { url: components[i].url && components[i].url.url }, "More information")));
    }
    return (React.createElement(List, { data: components }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'productComponents' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h2", null, title),
                description &&
                    React.createElement("p", { className: 'productComponents__title' }, description),
                React.createElement(Default, null,
                    React.createElement("div", { className: 'productComponents__list row' }, data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: "col-12 col-md-6 col-lg-4" },
                        React.createElement("div", { className: 'productComponents__list__item' },
                            React.createElement(Media, { type: 'image', data: item.image }),
                            React.createElement("div", { className: 'productComponents__list__item__content' },
                                item.title && React.createElement("h5", null, item.title),
                                item.description && React.createElement("p", null, item.description),
                                React.createElement(Link, { url: item.url && item.url.url }, "More information"))))); }))),
                React.createElement(Mobile, null,
                    React.createElement(Slider, { isFullWidth: false, delay: 7000, slides: mobileViews, showArrows: true })))));
    }));
};
export default ProductComponents;
//# sourceMappingURL=ProductComponents.js.map