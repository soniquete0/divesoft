import React from 'react';
import List from '../List';
import Media from '@source/partials/Media';
import Button from '@source/partials/Button';
var ProductsPreview = function (props) { return (React.createElement(List, { data: props.data.products }, function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: 'productsPreview' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row productsPreview__list" }, data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-lg-6 col-xl-3' },
                React.createElement("div", { className: 'productsPreview__list__item' },
                    React.createElement(Media, { type: 'image', data: item.img }),
                    item.title && React.createElement("h5", null, item.title),
                    item.description && React.createElement("p", null, item.description),
                    React.createElement(Button, { url: item.url }, "shop now")))); })))));
})); };
export default ProductsPreview;
//# sourceMappingURL=ProductsPreview.js.map