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
var Media_1 = require("../../partials/Media");
var ProductMountRouter = /** @class */ (function (_super) {
    __extends(ProductMountRouter, _super);
    function ProductMountRouter(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function () {
            var panel = document.getElementById('configuration-rect');
            var panelRect = panel.getBoundingClientRect();
            var windowHeight = window && window.outerHeight;
            (panelRect.top - windowHeight < 0) ? _this.setState({ panelHidden: true }) : _this.setState({ panelHidden: false });
        };
        _this.columnsActive = function () {
            // tslint:disable-next-line: max-line-length
            if (_this.props.data.leftHeadline.length > 0 && _this.props.data.middleHeadline.length > 0 && _this.props.data.rightHeadline.length > 0 && _this.props.data.extraHeadline.length > 0) {
                return 'col-md-3';
                // tslint:disable-next-line: max-line-length
            }
            else if (_this.props.data.leftHeadline.length > 0 && _this.props.data.middleHeadline.length > 0 && _this.props.data.rightHeadline.length > 0) {
                return 'col-md-4';
            }
            else if (_this.props.data.leftHeadline.length > 0 && _this.props.data.middleHeadline.length > 0) {
                return 'col-md-6';
            }
        };
        _this.state = {
            panelActive: false,
            panelHidden: false,
        };
        return _this;
    }
    ProductMountRouter.prototype.componentDidMount = function () {
        return window && window.addEventListener('scroll', this.handleScroll);
    };
    ProductMountRouter.prototype.componentWillUnmount = function () {
        return window && window.removeEventListener('scroll', this.handleScroll);
    };
    ProductMountRouter.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, toggleOpen = _a.toggleOpen, toggleClose = _a.toggleClose, leftHeadline = _a.leftHeadline, leftText = _a.leftText, leftUrl = _a.leftUrl, leftImg = _a.leftImg, middleHeadline = _a.middleHeadline, middleText = _a.middleText, middleUrl = _a.middleUrl, middleImg = _a.middleImg, rightHeadline = _a.rightHeadline, rightText = _a.rightText, rightUrl = _a.rightUrl, rightImg = _a.rightImg, extraHeadline = _a.extraHeadline, extraText = _a.extraText, extraUrl = _a.extraUrl, extraImg = _a.extraImg, desktopBackText = _a.desktopBackText, desktopBackUrl = _a.desktopBackUrl;
        return (React.createElement("div", null,
            React.createElement("div", { className: "container configuration-types", id: "configuration-rect" },
                React.createElement("div", { className: "configuration-box-wrapper row" },
                    leftImg && React.createElement("div", { className: "configuration-box " + this.columnsActive() },
                        React.createElement("h3", { className: "headline text-center" }, leftHeadline && leftHeadline),
                        React.createElement("p", { className: "text text-center" }, leftText && leftText),
                        React.createElement("div", { className: "image-wrap" },
                            leftImg && React.createElement(Media_1.default, { type: 'image', data: leftImg }),
                            leftUrl && React.createElement(Button_1.default, { url: leftUrl, classes: "btn-primary" }, "View"))),
                    middleHeadline && React.createElement("div", { className: "configuration-box " + this.columnsActive() },
                        React.createElement("h3", { className: "headline text-center" }, middleHeadline && middleHeadline),
                        React.createElement("p", { className: "text text-center" }, middleText && middleText),
                        React.createElement("div", { className: "image-wrap" },
                            middleImg && React.createElement(Media_1.default, { type: 'image', data: middleImg }),
                            middleUrl && React.createElement(Button_1.default, { url: middleUrl, classes: "btn-primary" }, "View"))),
                    rightHeadline && React.createElement("div", { className: "configuration-box " + this.columnsActive() },
                        React.createElement("h3", { className: "headline text-center" }, rightHeadline && rightHeadline),
                        React.createElement("p", { className: "text text-center" }, rightText && rightText),
                        React.createElement("div", { className: "image-wrap" },
                            rightImg && React.createElement(Media_1.default, { type: 'image', data: rightImg }),
                            rightUrl && React.createElement(Button_1.default, { url: rightUrl, classes: "btn-primary" }, "View"))),
                    extraHeadline && React.createElement("div", { className: "configuration-box " + this.columnsActive() },
                        React.createElement("h3", { className: "headline text-center" }, extraHeadline && extraHeadline),
                        React.createElement("p", { className: "text text-center" }, extraText && extraText),
                        React.createElement("div", { className: "image-wrap" },
                            extraImg && React.createElement(Media_1.default, { type: 'image', data: extraImg }),
                            extraUrl && React.createElement(Button_1.default, { url: extraUrl, classes: "btn-primary" }, "View"))))),
            React.createElement("div", { className: "configuration-types-panel " + (this.state.panelActive ? 'active' : '') + " " + (this.state.panelHidden ? 'animate-slidedown' : '') },
                !this.state.panelHidden ? React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "options-toggler", onClick: function () { return _this.setState({ panelActive: true }); } },
                        toggleOpen && toggleOpen,
                        " ",
                        React.createElement("span", { className: "dropdown__arrow" })),
                    React.createElement("span", { className: "options-toggler options-toggler-close", onClick: function () { return _this.setState({ panelActive: false }); } }, toggleClose && toggleClose)) : '',
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "links-wrapper" },
                        desktopBackUrl && React.createElement(Link_1.default, __assign({}, desktopBackUrl, { className: "btn-back" }), desktopBackText),
                        leftHeadline && React.createElement(Link_1.default, __assign({}, leftUrl, { className: "config-type-link " + this.columnsActive(), onClick: function () { return _this.setState({ panelActive: false }); } }),
                            leftImg && React.createElement(Media_1.default, { type: 'image', data: leftImg, width: "60", height: "60" }),
                            React.createElement("span", { className: "headline" }, leftHeadline && leftHeadline)),
                        middleHeadline && React.createElement(Link_1.default, __assign({}, middleUrl, { className: "config-type-link " + this.columnsActive(), onClick: function () { return _this.setState({ panelActive: false }); } }),
                            middleImg && React.createElement(Media_1.default, { type: 'image', data: middleImg, width: "60", height: "60" }),
                            React.createElement("span", { className: "headline" }, middleHeadline && middleHeadline)),
                        rightHeadline && React.createElement(Link_1.default, __assign({}, rightUrl, { className: "config-type-link " + this.columnsActive(), onClick: function () { return _this.setState({ panelActive: false }); } }),
                            rightImg && React.createElement(Media_1.default, { type: 'image', data: rightImg, width: "60", height: "60" }),
                            React.createElement("span", { className: "headline" }, rightHeadline && rightHeadline)),
                        extraHeadline && React.createElement(Link_1.default, __assign({}, extraUrl, { className: "config-type-link " + this.columnsActive(), onClick: function () { return _this.setState({ panelActive: false }); } }),
                            extraImg && React.createElement(Media_1.default, { type: 'image', data: extraImg, width: "60", height: "60" }),
                            React.createElement("span", { className: "headline" }, extraHeadline && extraHeadline)))))));
    };
    return ProductMountRouter;
}(React.Component));
exports.default = ProductMountRouter;
//# sourceMappingURL=ProductMountRouter.js.map