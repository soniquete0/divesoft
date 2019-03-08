import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
var ProductPreviews = function (props) {
    var _a = props.data, title = _a.title, subTitle = _a.subTitle, productPreviews = _a.productPreviews;
    return (React.createElement("div", { className: 'product-previews' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'product-previews__top' },
                title && React.createElement("h3", null, title),
                subTitle && React.createElement("p", null, subTitle)),
            React.createElement("div", { className: 'product-preview__list row' },
                React.createElement("div", { className: "col" }, productPreviews.length >= 1 && productPreviews[0] &&
                    React.createElement("div", { key: '1', className: 'product-previews__item', style: productPreviews[0].image ?
                            { backgroundImage: "url(" + getImageUrl(productPreviews[0].image) + ")" } : {} },
                        React.createElement("div", { className: 'product-previews__item__content' },
                            productPreviews[0].description && React.createElement("p", { className: 'product-previews__item__description', style: productPreviews[0].isBkgDark ? { color: 'white' } : {} }, productPreviews[0].description),
                            React.createElement("div", { className: 'product-previews__item__divider' }),
                            productPreviews[0].title &&
                                React.createElement("h2", { className: 'product-previews__item__title', style: productPreviews[0].isBkgDark ? { color: 'white' } : {} }, productPreviews[0].title),
                            React.createElement(Button, { url: productPreviews[0].url }, "More")))),
                React.createElement("div", { className: "col" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" }, productPreviews.length >= 2 && productPreviews[1] &&
                            React.createElement("div", { key: '2', className: 'product-previews__item product-previews__item--small', style: productPreviews[1].image ?
                                    { backgroundImage: "url(" + getImageUrl(productPreviews[1].image) + ")" } : {} },
                                React.createElement("div", { className: 'product-previews__item__content' },
                                    productPreviews[1].description &&
                                        React.createElement("p", { className: 'product-previews__item__description', style: productPreviews[1].isBkgDark ? { color: 'white' } : {} }, productPreviews[1].description),
                                    React.createElement("div", { className: 'product-previews__item__divider' }),
                                    productPreviews[1].title &&
                                        React.createElement("h4", { className: 'product-previews__item__title', style: productPreviews[1].isBkgDark ? { color: 'white' } : {} }, productPreviews[1].title),
                                    React.createElement(Button, { url: productPreviews[1].url }, "More")))),
                        React.createElement("div", { className: "col" }, productPreviews.length >= 3 && productPreviews[2] &&
                            React.createElement("div", { key: '3', className: 'product-previews__item product-previews__item--small', style: productPreviews[2].image ?
                                    { backgroundImage: "url(" + getImageUrl(productPreviews[2].image) + ")" } : {} },
                                React.createElement("div", { className: 'product-previews__item__content' },
                                    productPreviews[2].description && React.createElement("p", { className: 'product-previews__item__description', style: productPreviews[2].isBkgDark ? { color: 'white' } : {} }, productPreviews[2].description),
                                    React.createElement("div", { className: 'product-previews__item__divider' }),
                                    productPreviews[2].title &&
                                        React.createElement("h4", { className: 'product-previews__item__title', style: productPreviews[2].isBkgDark ? { color: 'white' } : {} }, productPreviews[2].title),
                                    React.createElement(Button, { url: productPreviews[2].url }, "More"))))),
                    React.createElement("div", { className: "row" }, productPreviews.length >= 4 && productPreviews[3] &&
                        React.createElement("div", { key: '4', className: 'product-previews__item product-previews__item--small', style: productPreviews[3].image ?
                                { backgroundImage: "url(" + getImageUrl(productPreviews[3].image) + ")" } : {} },
                            React.createElement("div", { className: 'product-previews__item__content' },
                                productPreviews[1].description && React.createElement("p", { className: 'product-previews__item__description', style: productPreviews[3].isBkgDark ? { color: 'white' } : {} }, productPreviews[3].description),
                                React.createElement("div", { className: 'product-previews__item__divider' }),
                                productPreviews[3].title &&
                                    React.createElement("h4", { className: 'product-previews__item__title', style: productPreviews[3].isBkgDark ? { color: 'white' } : {} }, productPreviews[3].title),
                                React.createElement(Button, { url: productPreviews[3].url }, "More")))))))));
};
export default ProductPreviews;
//# sourceMappingURL=ProductPreviews.js.map