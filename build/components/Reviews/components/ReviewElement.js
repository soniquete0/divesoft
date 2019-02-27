import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Media from '@source/partials/Media';
export default function ReviewElement(props) {
    var image = props.image, cite = props.cite, starCount = props.starCount;
    var rows = [];
    for (var i = 0; i < starCount; i++) {
        rows.push(React.createElement(SvgIcon, { name: "star", key: i }));
    } // 5 stars by default
    if (starCount < 5) {
        rows.slice(-(5 - starCount), starCount);
    }
    return (React.createElement("div", { className: 'reviews__list__element' },
        image && React.createElement(Media, { type: 'image', data: image }),
        React.createElement("div", { className: 'reviews__list__element__content' },
            cite && React.createElement("cite", null, cite),
            rows && React.createElement("div", { className: 'stars' }, rows))));
}
//# sourceMappingURL=ReviewElement.js.map