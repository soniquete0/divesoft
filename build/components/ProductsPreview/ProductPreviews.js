import * as React from 'react';
import Link from '@source/partials/Link';
import getImageUrl from '@source/helpers/getImageUrl';
var ProductPreviews = function (props) {
    var productPreviews = props.data.productPreviews;
    console.log(productPreviews);
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "products-preview row" },
            React.createElement("div", { className: "col" }, productPreviews[0] &&
                React.createElement(Link, { key: '1', url: productPreviews[0].url && productPreviews[0].url.url, style: productPreviews[0].image ?
                        { backgroundImage: "url(" + getImageUrl(productPreviews[0].image) + ")" } : {} },
                    productPreviews[0].description && React.createElement("p", null, productPreviews[0].description),
                    React.createElement("div", { className: 'products-preview__divider' }),
                    productPreviews[0].title && React.createElement("p", null, productPreviews[0].title))),
            React.createElement("div", { className: "col" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" }, productPreviews[1] &&
                        React.createElement(Link, { key: '2', url: productPreviews[1].url && productPreviews[1].url.url, style: productPreviews[1].image ?
                                { backgroundImage: "url(" + getImageUrl(productPreviews[1].image) + ")" } : {} },
                            productPreviews[1].description && React.createElement("p", null, productPreviews[1].description),
                            React.createElement("div", { className: 'products-preview__divider' }),
                            productPreviews[1].title && React.createElement("p", null, productPreviews[1].title))),
                    React.createElement("div", { className: "col" }, productPreviews[2] &&
                        React.createElement(Link, { key: '3', url: productPreviews[2].url && productPreviews[2].url.url, style: productPreviews[2].image ?
                                { backgroundImage: "url(" + getImageUrl(productPreviews[2].image) + ")" } : {} },
                            productPreviews[2].description && React.createElement("p", null, productPreviews[2].description),
                            React.createElement("div", { className: 'products-preview__divider' }),
                            productPreviews[2].title && React.createElement("p", null, productPreviews[2].title)))),
                React.createElement("div", { className: "row" }, productPreviews[3] &&
                    React.createElement(Link, { key: '4', url: productPreviews[3].url && productPreviews[3].url.url, style: productPreviews[3].image ?
                            { backgroundImage: "url(" + getImageUrl(productPreviews[3].image) + ")" } : {} },
                        productPreviews[3].description && React.createElement("p", null, productPreviews[3].description),
                        React.createElement("div", { className: 'products-preview__divider' }),
                        productPreviews[3].title && React.createElement("p", null, productPreviews[3].title)))))));
};
export default ProductPreviews;
//# sourceMappingURL=ProductPreviews.js.map