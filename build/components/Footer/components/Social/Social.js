import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
var Social = function (props) {
    var icons = props.icons;
    return (React.createElement("div", { className: 'social' }, icons && icons.map(function (icon, i) { return (React.createElement(Link, { key: i, url: icon.url && icon.url.url },
        React.createElement(SvgIcon, { type: 'white', name: icon.title && icon.title }))); })));
};
export default Social;
//# sourceMappingURL=Social.js.map