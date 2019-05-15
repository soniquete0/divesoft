"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("@source/partials/Button");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var Hero = function (props) {
    var _a = props.data, url = _a.url, text = _a.text, image = _a.image, title = _a.title, btnTitle = _a.btnTitle, paddingTop = _a.paddingTop, smallFontSize = _a.smallFontSize;
    return (React.createElement("div", { className: paddingTop ? 'topWrapper' : '' },
        React.createElement("div", { className: 'hero', style: { backgroundImage: image && "url(" + getImageUrl_1.default(image) + ")" } },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'hero__content' },
                    title && !smallFontSize && React.createElement("h1", null, title),
                    title && smallFontSize && React.createElement("h2", null, title),
                    text && React.createElement("p", { className: 'textDescription' }, text),
                    btnTitle && React.createElement(Button_1.default, { url: url }, btnTitle))))));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map