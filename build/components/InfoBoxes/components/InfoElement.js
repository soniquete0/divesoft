import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
export default function InfoElement(props) {
    var title = props.title, image = props.image, url = props.url;
    return (React.createElement("a", { className: 'info-boxes__list__element', style: { backgroundImage: image && "url(" + getImageUrl(image) + ")" } },
        React.createElement("div", { className: 'fullWidthContainer info-boxes__list__element__content' },
            title && React.createElement("h5", null, title),
            React.createElement(Button, { url: url, classes: 'btn--fullWidth btn--greenBkg' }, "vice info")),
        React.createElement("div", { className: 'info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, white 100%)", } })));
}
//# sourceMappingURL=InfoElement.js.map