"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Media_1 = require("@source/partials/Media");
var Button_1 = require("@source/partials/Button");
var ProductsPreview = function (props) { return (React.createElement(List_1.default, { data: props.data.products }, function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: 'productsPreview' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row productsPreview__list" }, data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'col-12 col-lg-6 col-xl-3' },
                React.createElement("div", { className: 'productsPreview__list__item' },
                    React.createElement(Media_1.default, { type: 'image', data: item.img }),
                    item.title && React.createElement("h5", null, item.title),
                    item.description && React.createElement("p", null, item.description),
                    React.createElement(Button_1.default, { url: item.url }, "shop now")))); })))));
})); };
exports.default = ProductsPreview;
//# sourceMappingURL=ProductsPreview.js.map