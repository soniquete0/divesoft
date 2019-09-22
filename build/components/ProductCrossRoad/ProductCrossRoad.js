"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var ProductCrossRoad = /** @class */ (function (_super) {
    __extends(ProductCrossRoad, _super);
    function ProductCrossRoad(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ProductCrossRoad.prototype.render = function () {
        var _a = this.props.data, title = _a.title, url = _a.url, links = _a.links;
        return (React.createElement("section", { className: "product-crossroad-wrapper" },
            React.createElement("div", { className: "product-crossroad-container container" },
                title && React.createElement("h1", null,
                    React.createElement(Link_1.default, __assign({}, url), title)),
                React.createElement(List_1.default, { data: links }, function (_a) {
                    var data = _a.data;
                    console.log();
                    return (Array.isArray(data) && data.length > 0 && React.createElement("ul", { className: "product-crossroad-list" }, data.map(function (i) { return (React.createElement("li", { className: "" + (i.highlight ? 'highlight' : '') },
                        React.createElement(Link_1.default, __assign({}, i.url), i.title))); })));
                }))));
    };
    return ProductCrossRoad;
}(React.Component));
exports.default = ProductCrossRoad;
//# sourceMappingURL=ProductCrossRoad.js.map