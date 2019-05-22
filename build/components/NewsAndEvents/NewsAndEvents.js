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
var Media_1 = require("../../partials/Media");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var NewsAndEvents = /** @class */ (function (_super) {
    __extends(NewsAndEvents, _super);
    function NewsAndEvents(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1
        };
        return _this;
    }
    NewsAndEvents.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, titleColor = _a.titleColor, backgroundImage = _a.backgroundImage, newsAndEvents = _a.newsAndEvents;
        return (React.createElement(List_1.default, { data: newsAndEvents }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 9), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'newsAndEvents', style: {
                    backgroundImage: backgroundImage && "url(" + getImageUrl_1.default(backgroundImage) + ")"
                } },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", { style: { color: "" + titleColor } }, title),
                    React.createElement("div", { className: 'newsAndEvents__list row d-flex justify-content-between align-items-center' }, items &&
                        items.map(function (item, i) { return (React.createElement("div", { key: i, className: 'newsAndEvents__list__item col-12 col-md-4' },
                            React.createElement("div", { className: "row" }, item.img && React.createElement(Media_1.default, { type: 'image', data: item.img })),
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: 'newsAndEvents__list__item__content' },
                                    React.createElement("p", { className: 'newsAndEvents__list__item__content--date' },
                                        React.createElement("span", null, item.day),
                                        " / ",
                                        item.mounthAndYear),
                                    React.createElement("h4", null, item.title),
                                    React.createElement("p", { className: 'newsAndEvents__list__item__content--text' }, item.text),
                                    React.createElement(Link_1.default, __assign({}, item.url), "More information"))))); })),
                    _this.state.numberOfPage < lastPage &&
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({
                                numberOfPage: _this.state.numberOfPage + 1
                            }); } }, "Show more"))));
        }));
    };
    return NewsAndEvents;
}(React.Component));
exports.default = NewsAndEvents;
//# sourceMappingURL=NewsAndEvents.js.map