import * as React from 'react';
import Link from '@source/partials/Link';
import getImageUrl from '@source/helpers/getImageUrl';
import List from '../List';
var MiniBoxes = function (props) {
    var _a = props.data, title = _a.title, dividerOnTop = _a.dividerOnTop, miniBoxes = _a.miniBoxes;
    return (React.createElement(List, { data: miniBoxes }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'mini-boxes' },
            React.createElement("div", { className: "container" },
                dividerOnTop ? React.createElement("div", { className: 'mini-boxes__divider' }) : '',
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'mini-boxes__list grid' }, data && data.map(function (box, i) {
                    return (React.createElement(Link, { key: i, url: box.url && box.url.url, className: 'mini-boxes__list__item', style: { backgroundImage: box.image && "url(" + getImageUrl(box.image) + ")" } },
                        box.title && React.createElement("p", null, box.title),
                        React.createElement("div", { className: 'mini-boxes__list__item--colorGradient', style: {
                                background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, \n                        " + box.gradientColor + " 100%)"
                            } })));
                })))));
    }));
};
export default MiniBoxes;
//# sourceMappingURL=MiniBoxes.js.map