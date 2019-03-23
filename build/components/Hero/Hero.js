import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
var Hero = function (props) {
    var _a = props.data, url = _a.url, text = _a.text, image = _a.image, title = _a.title, btnTitle = _a.btnTitle, paddingTop = _a.paddingTop, smallFontSize = _a.smallFontSize;
    return (React.createElement("div", { className: paddingTop ? 'topWrapper' : '' },
        React.createElement("div", { className: 'hero', style: { backgroundImage: image && "url(" + getImageUrl(image) + ")" } },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'hero__content' },
                    title && !smallFontSize && React.createElement("h1", null, title),
                    title && smallFontSize && React.createElement("h2", null, title),
                    React.createElement("p", { className: 'textDescription' }, text),
                    btnTitle && React.createElement(Button, { url: url }, btnTitle))))));
};
export default Hero;
//# sourceMappingURL=Hero.js.map