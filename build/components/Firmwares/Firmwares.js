import React from 'react';
import ReactMarkdown from 'react-markdown';
import List from '../List';
var Firmwares = function (props) {
    var _a = props.data, title = _a.title, divider = _a.divider, articles = _a.articles;
    return (React.createElement(List, { data: articles }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: 'firmwares' },
            React.createElement("div", { className: 'container' },
                React.createElement("h2", null, title),
                data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: 'firmwares__item' },
                    item.title && React.createElement("h4", null, item.title),
                    React.createElement(ReactMarkdown, { source: item.text }))); }),
                divider ? React.createElement("div", { className: 'firmwares__divider' }) : '')));
    }));
};
export default Firmwares;
//# sourceMappingURL=Firmwares.js.map