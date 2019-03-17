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
import * as React from 'react';
import Button from '../../../../partials/Button';
import Media from '../../../../partials/Media';
import Link from '@source/partials/Link';
var MapBox = function (props) {
    var _a = props.clinicData, title = _a.title, address = _a.address, city = _a.city, phone = _a.phone, image = _a.image, ambulanceLink = _a.ambulanceLink;
    return (React.createElement("div", { className: 'mapBox' },
        React.createElement("div", { className: "mapBox__close " + (!(image && image.filename) ? 'mapBox__close--white' : ''), onClick: function () { return props.close(); } },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 52 52" },
                React.createElement("g", null,
                    React.createElement("path", { d: "M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" }),
                    React.createElement("path", { d: "M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z" })))),
        React.createElement("div", { className: 'mapBox__img' }, image && image.filename && React.createElement(Media, { type: "image", data: image })),
        React.createElement("div", { className: 'pcTitle' },
            React.createElement("img", { src: "/assets/medicon/images/logo.svg", alt: "Medicon Logo" }),
            React.createElement("div", { className: 'pcTitle__title' },
                React.createElement("h3", null, "Poliklinika"),
                React.createElement("div", { className: 'pcTitle__title__subtitle' },
                    React.createElement("span", null, title),
                    React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null),
                        React.createElement("div", null))))),
        React.createElement("div", { className: 'mapBox__contacts' },
            React.createElement("div", null,
                React.createElement("div", { className: 'mapBox__contacts__item' },
                    React.createElement("img", { src: '/assets/medicon/images/geoIcon.svg' }),
                    React.createElement("div", null,
                        React.createElement("p", null, address),
                        React.createElement("p", null, city))),
                React.createElement("div", { className: 'mapBox__contacts__item' },
                    React.createElement("img", { src: '/assets/medicon/images/phoneIcon.svg' }),
                    React.createElement("div", null,
                        React.createElement("p", null, phone)))),
            React.createElement("div", { className: 'mapBox__mobile__img' }, image && image.filename && React.createElement(Media, { type: "image", data: image }))),
        React.createElement("div", { className: 'mapBox__buttons' },
            React.createElement(Link, __assign({}, ambulanceLink),
                React.createElement(Button, { classes: "btn--small btn--blueBkg" }, "ambulance")),
            React.createElement(Link, { urlNewWindow: true, url: "https://www.google.com/maps/search/?api=1&query=" + title + "+medicon+" + address + "+" + city },
                React.createElement(Button, { classes: "btn--small btn--blueBorder" }, "kudy k n\u00E1m")))));
};
export default MapBox;
//# sourceMappingURL=MapBox.js.map