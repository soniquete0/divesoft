"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../partials/Button");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var ProductsMenu = function (props) {
    var _a = props.data, title = _a.title, subTitle = _a.subTitle, products = _a.products;
    return (React.createElement("div", { className: 'product-previews' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'product-previews__top' },
                title && React.createElement("h3", null, title),
                subTitle && React.createElement("p", { className: 'textDescription' }, subTitle)),
            React.createElement("div", { className: 'product-preview__list row' },
                React.createElement("div", { className: "col" }, products.length >= 1 && products[0] &&
                    React.createElement("div", { key: '1', className: 'product-previews__item', style: products[0].image ?
                            { backgroundImage: "url(" + getImageUrl_1.default(products[0].image) + ")" } : {} },
                        React.createElement("div", { className: 'product-previews__item__content' },
                            products[0].description && React.createElement("p", { className: 'product-previews__item__description', style: products[0].isBkgDark ? { color: 'white' } : {} }, products[0].description),
                            React.createElement("div", { className: 'product-previews__item__divider' }),
                            products[0].title &&
                                React.createElement("h2", { className: 'product-previews__item__title', style: products[0].isBkgDark ? { color: 'white' } : {} }, products[0].title),
                            React.createElement(Button_1.default, { url: products[0].url }, "More")))),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" }, products.length >= 2 && products[1] &&
                            React.createElement("div", { key: '2', className: 'product-previews__item product-previews__item--small', style: products[1].image ?
                                    { backgroundImage: "url(" + getImageUrl_1.default(products[1].image) + ")" } : {} },
                                React.createElement("div", { className: 'product-previews__item__content' },
                                    products[1].description &&
                                        React.createElement("p", { className: 'product-previews__item__description', style: products[1].isBkgDark ? { color: 'white' } : {} }, products[1].description),
                                    React.createElement("div", { className: 'product-previews__item__divider' }),
                                    products[1].title &&
                                        React.createElement("h4", { className: 'product-previews__item__title', style: products[1].isBkgDark ? { color: 'white' } : {} }, products[1].title),
                                    React.createElement(Button_1.default, { url: products[1].url }, "More")))),
                        React.createElement("div", { className: "col" }, products.length >= 3 && products[2] &&
                            React.createElement("div", { key: '3', className: 'product-previews__item product-previews__item--small', style: products[2].image ?
                                    { backgroundImage: "url(" + getImageUrl_1.default(products[2].image) + ")" } : {} },
                                React.createElement("div", { className: 'product-previews__item__content' },
                                    products[2].description && React.createElement("p", { className: 'product-previews__item__description', style: products[2].isBkgDark ? { color: 'white' } : {} }, products[2].description),
                                    React.createElement("div", { className: 'product-previews__item__divider' }),
                                    products[2].title &&
                                        React.createElement("h4", { className: 'product-previews__item__title', style: products[2].isBkgDark ? { color: 'white' } : {} }, products[2].title),
                                    React.createElement(Button_1.default, { url: products[2].url }, "More"))))),
                    React.createElement("div", { className: "row" }, products.length >= 4 && products[3] &&
                        React.createElement("div", { key: '4', className: 'product-previews__item product-previews__item--small', style: products[3].image ?
                                { backgroundImage: "url(" + getImageUrl_1.default(products[3].image) + ")" } : {} },
                            React.createElement("div", { className: 'product-previews__item__content' },
                                products[1].description && React.createElement("p", { className: 'product-previews__item__description', style: products[3].isBkgDark ? { color: 'white' } : {} }, products[3].description),
                                React.createElement("div", { className: 'product-previews__item__divider' }),
                                products[3].title &&
                                    React.createElement("h4", { className: 'product-previews__item__title', style: products[3].isBkgDark ? { color: 'white' } : {} }, products[3].title),
                                React.createElement(Button_1.default, { url: products[3].url }, "More")))))))));
};
exports.default = ProductsMenu;
//# sourceMappingURL=ProductsMenu.js.map