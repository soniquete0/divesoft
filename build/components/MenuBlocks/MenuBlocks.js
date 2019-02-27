import * as React from 'react';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import getImageUrl from '@source/helpers/getImageUrl';
import List from '../List';
var MenuBlocks = function (props) {
    var menuBlocks = props.data.menuBlocks;
    return (React.createElement(List, { data: menuBlocks }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'menu-blocks grid' }, data && data.map(function (block, i) {
                return (React.createElement(Link, { key: i, url: block.url && block.url.url, className: 'menu-blocks__item', style: { backgroundImage: block.image && "url(" + getImageUrl(block.image) + ")" } },
                    block.icon && React.createElement(Media, { type: 'image', data: block.icon }),
                    React.createElement("p", null, block.title && block.title),
                    React.createElement("div", { className: 'menu-blocks__item__colorGradient', style: {
                            background: "linear-gradient(40deg, " + (block.color && block.color || '#3eac49') + " 0%, \n                        transparent 100%)"
                        } })));
            }))));
    }));
};
export default MenuBlocks;
//# sourceMappingURL=MenuBlocks.js.map