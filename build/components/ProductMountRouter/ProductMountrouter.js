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
        return (React.createElement("div", null,
            React.createElement("div", { className: "container configuration-types", id: "configuration-rect" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" },
                            "SIDEMOUNT",
                            React.createElement("br", null),
                            "CONFIGURATION"),
                        React.createElement("p", { className: "text text-center" }, "Backplates, Consumables, Tanks, Blackplates, Consumables"),
                        React.createElement("div", { className: "image-wrap" },
                            React.createElement("img", { src: "https://fakeimg.pl/380x380/f0f0f0/" }),
                            React.createElement("button", { className: "btn btn-primary" }, "View"))),
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" },
                            "FRONTMOUNT",
                            React.createElement("br", null),
                            "CONFIGURATION"),
                        React.createElement("p", { className: "text text-center" }, "Backplates, Consumables, Tanks, Blackplates, Consumables"),
                        React.createElement("div", { className: "image-wrap" },
                            React.createElement("img", { src: "https://fakeimg.pl/380x380/f0f0f0/" }),
                            React.createElement("button", { className: "btn btn-primary" }, "View"))),
                    React.createElement("div", { className: "col-md-4 configuration-box" },
                        React.createElement("h3", { className: "headline text-center" },
                            "BACKMOUNT",
                            React.createElement("br", null),
                            "CONFIGURATION"),
                        React.createElement("p", { className: "text text-center" }, "Backplates, Consumables, Tanks, Blackplates, Consumables"),
                        React.createElement("div", { className: "image-wrap" },
                            React.createElement("img", { src: "https://fakeimg.pl/380x380/f0f0f0/" }),
                            React.createElement("button", { className: "btn btn-primary" }, "View"))))),
            !this.state.panelHidden ? React.createElement("div", { className: "configuration-types-panel " + (this.state.panelActive ? 'active' : '') },
                React.createElement("span", { className: "options-toggler", onClick: function () { return _this.setState({ panelActive: true }); } },
                    "OPTIONS ",
                    React.createElement("span", { className: "dropdown__arrow" })),
                React.createElement("span", { className: "options-toggler options-toggler-close", onClick: function () { return _this.setState({ panelActive: false }); } }, "CLOSE"),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("a", { href: "#", className: "config-type-link" },
                                React.createElement("img", { src: "https://fakeimg.pl/55x62/f0f0f0/" }),
                                React.createElement("span", { className: "headline" }, "Sidemount Configuration"))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("a", { href: "#", className: "config-type-link" },
                                React.createElement("img", { src: "https://fakeimg.pl/55x62/f0f0f0/" }),
                                React.createElement("span", { className: "headline" }, "Front Mounted Configuration"))),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("a", { href: "#", className: "config-type-link" },
                                React.createElement("img", { src: "https://fakeimg.pl/55x62/f0f0f0/" }),
                                React.createElement("span", { className: "headline" }, "Sidemount Configuration")))))) : ''));
    };
    return ProductMountRouter;
}(React.Component));
exports.default = ProductMountRouter;
//# sourceMappingURL=ProductMountrouter.js.map