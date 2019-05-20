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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("@source/partials/Button");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var AboutUsHome = /** @class */ (function (_super) {
    __extends(AboutUsHome, _super);
    function AboutUsHome(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleHoverRight = function () { return _this.setState({ hoverRight: !_this.state.hoverRight }); };
        _this.toggleHoverLeft = function () { return _this.setState({ hoverLeft: !_this.state.hoverLeft }); };
        _this.state = {
            hoverLeft: true,
            hoverRight: true
        };
        return _this;
    }
    AboutUsHome.prototype.render = function () {
        var _a = this.props.data, leftTitle = _a.leftTitle, leftSubtitle = _a.leftSubtitle, leftText = _a.leftText, leftUrl = _a.leftUrl, leftBtnTitle = _a.leftBtnTitle, leftImg = _a.leftImg, rightTitle = _a.rightTitle, rightSubtitle = _a.rightSubtitle, rightText = _a.rightText, rightUrl = _a.rightUrl, rightBtnTitle = _a.rightBtnTitle, rightImg = _a.rightImg;
        return (React.createElement("div", { className: 'aboutUsHome' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12 col-xl-6" },
                        React.createElement("div", { className: this.state.hoverLeft ? 'aboutUsHome__block left' : 'aboutUsHome__block left hovered', onMouseEnter: this.toggleHoverLeft, onMouseLeave: this.toggleHoverLeft },
                            React.createElement("div", { className: "img-wrap" }, leftImg && React.createElement("img", { src: getImageUrl_1.default(leftImg), className: "img-under" })),
                            React.createElement("div", { className: "aboutUsHome__info" },
                                leftTitle && React.createElement("h3", null,
                                    " ",
                                    leftTitle,
                                    " "),
                                leftSubtitle && React.createElement("h4", null, leftSubtitle),
                                leftText && React.createElement("p", null,
                                    " ",
                                    leftText,
                                    " "),
                                leftUrl && leftBtnTitle && React.createElement(Button_1.default, { url: leftUrl }, leftBtnTitle)))),
                    React.createElement("div", { className: "col-12 col-xl-6" },
                        React.createElement("div", { className: this.state.hoverRight ? 'aboutUsHome__block right' : 'aboutUsHome__block right hovered', onMouseEnter: this.toggleHoverRight, onMouseLeave: this.toggleHoverRight },
                            React.createElement("div", { className: "img-wrap" }, rightImg && React.createElement("img", { src: getImageUrl_1.default(rightImg), className: "img-under" })),
                            React.createElement("div", { className: "aboutUsHome__info" },
                                rightTitle && React.createElement("h3", null,
                                    " ",
                                    rightTitle,
                                    " "),
                                rightSubtitle && React.createElement("h4", null, rightSubtitle),
                                rightText && React.createElement("p", null,
                                    " ",
                                    rightText,
                                    " "),
                                rightUrl && rightBtnTitle && React.createElement(Button_1.default, { url: rightUrl }, rightBtnTitle))))))));
    };
    return AboutUsHome;
}(React.Component));
exports.default = AboutUsHome;
//# sourceMappingURL=AboutUsHome.js.map