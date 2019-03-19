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
import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';
var NewsAndEvents = /** @class */ (function (_super) {
    __extends(NewsAndEvents, _super);
    function NewsAndEvents(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () { return _this.setState({ items: _this.props.data.newsAndEvents }); };
        _this.state = {
            items: [],
            expanded: false
        };
        return _this;
    }
    NewsAndEvents.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, titleColor = _a.titleColor, backgroundImage = _a.backgroundImage;
        return (React.createElement(List, { data: this.state.items }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: 'newsAndEvents', style: {
                    backgroundImage: backgroundImage && "url(" + getImageUrl(backgroundImage) + ")"
                } },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", { style: { color: "" + titleColor } }, title),
                    React.createElement("div", { className: 'newsAndEvents__list row d-flex justify-content-between align-items-center' },
                        data && _this.state.items.length <= 9 &&
                            data.slice(0, _this.state.items.length).map(function (item, i) { return (React.createElement("div", { key: i, className: 'newsAndEvents__list__item col-12 col-md-4' },
                                React.createElement("div", { className: "row" }, item.img && React.createElement(Media, { type: 'image', data: item.img })),
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: 'newsAndEvents__list__item__content' },
                                        React.createElement("p", { className: 'newsAndEvents__list__item__content--date' },
                                            React.createElement("span", null, item.day),
                                            " / ",
                                            item.mounthAndYear),
                                        React.createElement("h4", null, item.title),
                                        React.createElement("p", { className: 'newsAndEvents__list__item__content--text' }, item.text),
                                        React.createElement(Link, { url: item.url && item.url.url }, "More information"))))); }),
                        data && _this.state.items.length >= 9 &&
                            data.slice(0, 9).map(function (item, i) { return (React.createElement("div", { key: i, className: 'newsAndEvents__list__item col-12 col-md-4' },
                                React.createElement("div", { className: "row" }, item.img && React.createElement(Media, { type: 'image', data: item.img })),
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: 'newsAndEvents__list__item__content' },
                                        React.createElement("p", { className: 'newsAndEvents__list__item__content--date' },
                                            React.createElement("span", null, item.day),
                                            " / ",
                                            item.mounthAndYear),
                                        React.createElement("h4", null, item.title),
                                        React.createElement("p", { className: 'newsAndEvents__list__item__content--text' }, item.text),
                                        React.createElement(Link, { url: item.url && item.url.url }, "More information"))))); }),
                        _this.state.expanded && data.slice(9, _this.state.items.length).map(function (item, i) { return (React.createElement("div", { key: i, className: 'newsAndEvents__list__item col-12 col-md-4' },
                            React.createElement("div", { className: "row" }, item.img && React.createElement(Media, { type: 'image', data: item.img })),
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: 'newsAndEvents__list__item__content' },
                                    React.createElement("p", { className: 'newsAndEvents__list__item__content--date' },
                                        React.createElement("span", null, item.day),
                                        " / ",
                                        item.mounthAndYear),
                                    React.createElement("h4", null, item.title),
                                    React.createElement("p", { className: 'newsAndEvents__list__item__content--text' }, item.text),
                                    React.createElement(Link, { url: item.url && item.url.url }, "More information"))))); })),
                    _this.state.items.length > 9 ?
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.setState({ expanded: !_this.state.expanded }); } },
                            "Show ",
                            _this.state.expanded ? 'less' : 'more') : '')));
        }));
    };
    return NewsAndEvents;
}(React.Component));
export default NewsAndEvents;
//# sourceMappingURL=NewsAndEvents.js.map