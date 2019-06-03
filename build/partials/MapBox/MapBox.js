"use strict";
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
var Link_1 = require("../Link");
var Button_1 = require("../Button");
function MapBox(props) {
    var title = props.title, country = props.country, address = props.address, city = props.city, email = props.email, url = props.url, phone = props.phone, service = props.service, storeChief = props.storeChief, text = props.text, web = props.web, name = props.name, position = props.position, keywords = props.keywords, onClick = props.onClick;
    return (React.createElement("div", { className: 'mapBox' },
        React.createElement("div", { className: 'mapBox--close', onClick: function () { return onClick(); } }),
        title && React.createElement("h3", null, title),
        name && React.createElement("h3", null, name),
        keywords && React.createElement("p", null, keywords),
        country && React.createElement("h4", null,
            country,
            ' ',
            React.createElement("span", { style: { color: '#6c6c6c', fontSize: '1.6rem' } }, city)),
        address && React.createElement("h5", null, address),
        position && React.createElement("h5", null, position),
        url && React.createElement(Button_1.default, { classes: 'mapBox--btn', url: url }, "See details"),
        React.createElement("div", { className: 'mapBox__info' },
            phone && React.createElement("p", null,
                "Phone: ",
                React.createElement("a", { href: "tel:" + phone }, phone)),
            email && React.createElement("p", null,
                "Email: ",
                React.createElement("a", { href: "mailto:" + email }, email)),
            web && React.createElement("p", null,
                "Web: ",
                React.createElement(Link_1.default, __assign({}, web), (web.url && web.url.toString()) || title)),
            storeChief && React.createElement("p", null,
                "Store chief: ",
                storeChief),
            service && React.createElement("p", null,
                "Service: ",
                service),
            text && React.createElement("p", null, text))));
}
exports.MapBox = MapBox;
exports.default = MapBox;
//# sourceMappingURL=MapBox.js.map