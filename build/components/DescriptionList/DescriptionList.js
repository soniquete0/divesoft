import * as React from 'react';
import ReactMarkdown from 'react-markdown';
var DescriptionList = function (props) {
    var _a = props.data, title = _a.title, text = _a.text;
    return (React.createElement("section", { className: 'description-list' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'description-list__content' }, text && React.createElement(ReactMarkdown, { source: text })))));
};
export default DescriptionList;
//# sourceMappingURL=DescriptionList.js.map