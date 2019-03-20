import React from 'react';
import List from '../List';
import Link from '@source/partials/Link';
var ListOfLinks = function (props) { return (React.createElement(List, { data: props.data.links }, function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: 'listOfLinks' },
        React.createElement("div", { className: "container" }, data && data.map(function (item, i) { return (React.createElement(Link, { key: i, url: item.url && item.url.url }, item.title)); }))));
})); };
export default ListOfLinks;
//# sourceMappingURL=ListOfLinks.js.map