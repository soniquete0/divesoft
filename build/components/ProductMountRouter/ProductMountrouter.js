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
var Button_1 = require("../../partials/Button");
var Link_1 = require("../../partials/Link");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var ProductMountRouter = /** @class */ (function (_super) {
    __extends(ProductMountRouter, _super);
    function ProductMountRouter(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function () {
            var panel = document.getElementById('configuration-rect');
            var panelRect = panel.getBoundingClientRect();
            var windowHeight = window.outerHeight;
            (panelRect.top - windowHeight < 0) ? _this.setState({ panelHidden: true }) : _this.setState({ panelHidden: false });
        };
        _this.state = {
            panelActive: false,
            panelHidden: false,
        };
        return _this;
    }
    ProductMountRouter.prototype.componentDidMount = function () {
        window.addEventListener('scroll', this.handleScroll);
    };
    ProductMountRouter.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleScroll);
    };
    ProductMountRouter.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, toggleOpen = _a.toggleOpen, toggleClose = _a.toggleClose, leftHeadline = _a.leftHeadline, leftText = _a.leftText, leftUrl = _a.leftUrl, leftImg = _a.leftImg, middleHeadline = _a.middleHeadline, middleText = _a.middleText, middleUrl = _a.middleUrl, middleImg = _a.middleImg, rightHeadline = _a.rightHeadline, rightText = _a.rightText, rightUrl = _a.rightUrl, rightImg = _a.rightImg;
        return (React.createElement("div", null,
            console.log(__assign({}, this.props.data)),
            React.createElement("div", { className: "container configuration-types", id: "configuration-rect" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" }, leftHeadline && leftHeadline),
                        React.createElement("p", { className: "text text-center" }, leftText && leftText),
                        React.createElement("div", { className: "image-wrap" },
                            leftImg && React.createElement("img", { src: getImageUrl_1.default(leftImg) }),
                            leftUrl && React.createElement(Button_1.default, { url: leftUrl, classes: "btn-primary" }, "View"))),
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" }, middleHeadline && middleHeadline),
                        React.createElement("p", { className: "text text-center" }, middleText && middleText),
                        React.createElement("div", { className: "image-wrap" },
                            middleImg && React.createElement("img", { src: getImageUrl_1.default(middleImg) }),
                            middleUrl && React.createElement(Button_1.default, { url: middleUrl, classes: "btn-primary" }, "View"))),
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" }, rightHeadline && rightHeadline),
                        React.createElement("p", { className: "text text-center" }, rightText && rightText),
                        React.createElement("div", { className: "image-wrap" },
                            rightImg && React.createElement("img", { src: getImageUrl_1.default(rightImg) }),
                            rightUrl && React.createElement(Button_1.default, { url: rightUrl, classes: "btn-primary" }, "View"))))),
            React.createElement("div", { className: "configuration-types-panel " + (this.state.panelActive ? 'active' : '') + " " + (this.state.panelHidden ? 'animate-slidedown' : '') },
                !this.state.panelHidden ? React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "options-toggler", onClick: function () { return _this.setState({ panelActive: true }); } },
                        toggleOpen && toggleOpen,
                        " ",
                        React.createElement("span", { className: "dropdown__arrow" })),
                    React.createElement("span", { className: "options-toggler options-toggler-close", onClick: function () { return _this.setState({ panelActive: false }); } }, toggleClose && toggleClose)) : '',
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" }, leftUrl && React.createElement(Link_1.default, __assign({}, leftUrl, { className: "config-type-link" }),
                            leftImg && React.createElement("img", { src: getImageUrl_1.default(leftImg) }),
                            React.createElement("span", { className: "headline" }, leftHeadline && leftHeadline))),
                        React.createElement("div", { className: "col-md-4" }, middleUrl && React.createElement(Link_1.default, __assign({}, middleUrl, { className: "config-type-link" }),
                            middleImg && React.createElement("img", { src: getImageUrl_1.default(middleImg) }),
                            React.createElement("span", { className: "headline" }, middleHeadline && middleHeadline))),
                        React.createElement("div", { className: "col-md-4" }, rightUrl && React.createElement(Link_1.default, __assign({}, rightUrl, { className: "config-type-link" }),
                            rightImg && React.createElement("img", { src: getImageUrl_1.default(rightImg), className: "img-under" }),
                            React.createElement("span", { className: "headline" }, rightHeadline && rightHeadline))))))));
    };
    return ProductMountRouter;
}(React.Component));
exports.default = ProductMountRouter;
//# sourceMappingURL=ProductMountrouter.js.map