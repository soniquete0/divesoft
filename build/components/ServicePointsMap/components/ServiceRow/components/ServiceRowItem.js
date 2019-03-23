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
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from '@source/partials/Link';
var ServiceRowItem = /** @class */ (function (_super) {
    __extends(ServiceRowItem, _super);
    function ServiceRowItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false
        };
        return _this;
    }
    ServiceRowItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, text = _a.text, address = _a.address, storeChief = _a.storeChief, phone = _a.phone, email = _a.email, web = _a.web;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-12 col-md-4" },
                React.createElement("h5", { onClick: function () { return _this.setState({ show: !_this.state.show }); } }, title),
                this.state.show ?
                    React.createElement("div", { className: 'serviceRow__list__contacts' },
                        storeChief && React.createElement("p", null,
                            "Store chief: ",
                            storeChief),
                        phone && React.createElement("p", null,
                            "Phone: ",
                            React.createElement("a", { href: "tel:" + phone }, phone)),
                        email && React.createElement("p", null,
                            "Email: ",
                            React.createElement("a", { href: "mailto:" + email }, email)),
                        web && React.createElement("p", null,
                            "Web: ",
                            React.createElement(Link, { urlNewWindow: true, url: web.url }, web.url.toString()))) : ''),
            React.createElement("div", { className: "col-12 col-md-8" },
                React.createElement("div", { onClick: function () { return _this.setState({ show: !_this.state.show }); }, className: "serviceRow__list__show " + (this.state.show ? 'serviceRow__list__show--minus' : '') }),
                React.createElement("div", { className: 'serviceRow__list__item' },
                    React.createElement("p", { onClick: function () { return _this.setState({ show: !_this.state.show }); } }, address),
                    this.state.show && text && React.createElement(ReactMarkdown, { source: text }))),
            React.createElement("div", { className: 'serviceRow__list__divider' })));
    };
    return ServiceRowItem;
}(React.Component));
export default ServiceRowItem;
//# sourceMappingURL=ServiceRowItem.js.map