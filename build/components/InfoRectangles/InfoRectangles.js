import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import List from '../List';
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement(List, { data: infoRectangles }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'info-rectangles' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'info-rectangles__divider' }),
                React.createElement("div", { className: 'info-rectangles__list grid' }, data && data.map(function (rectangle, i) {
                    return (React.createElement(Link, { key: i, url: rectangle.url && rectangle.url.url, className: 'info-rectangles__list__item', style: { backgroundImage: rectangle.image && "url(" + getImageUrl(rectangle.image) + ")" } },
                        React.createElement("div", { className: 'info-rectangles__list__item__content' },
                            rectangle.icon && React.createElement(Media, { type: 'image', data: rectangle.icon }),
                            rectangle.title &&
                                React.createElement("p", { style: rectangle.titleColor && { color: "" + rectangle.titleColor } || {} }, rectangle.title)),
                        rectangle.gradientColor && (React.createElement("div", { className: 'info-rectangles__list__item--colorGradient', style: {
                                background: "linear-gradient(to left, rgba(125, 185, 232, 0) 0%, \n                          " + rectangle.gradientColor + " 100%)"
                            } }))));
                })))));
    }));
};
export default InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map