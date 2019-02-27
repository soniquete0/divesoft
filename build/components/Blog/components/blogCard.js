import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
export function BlogCard(props) {
    var title = props.title, text = props.text, color = props.color, img = props.img, special = props.special;
    if (special) {
        return (React.createElement(Link, { className: 'blogCard blogCard--special' },
            title && React.createElement("h3", null, title),
            text && React.createElement("p", null, text)));
    }
    return (React.createElement(Link, { className: 'blogCard' },
        title && React.createElement("h3", null, title),
        text && React.createElement("p", null, text),
        img && React.createElement(Media, { type: 'image', data: img }),
        React.createElement("div", { className: 'blogCard__colorGradient', style: { background: "linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%," + color + " 100%)" } })));
}
//# sourceMappingURL=blogCard.js.map