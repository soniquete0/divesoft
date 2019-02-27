import * as React from 'react';
import ReactMarkdown from 'react-markdown';
var TextBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text;
    return (React.createElement("section", { className: 'textBlock' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'textBlock__container' },
                title && React.createElement("h3", { className: 'gradientHeading' }, title),
                text && (React.createElement("div", { className: "textBlock__container__text" },
                    React.createElement(ReactMarkdown, { source: text, renderers: {
                            // tslint:disable-next-line:no-any
                            paragraph: function (rProps) { return React.createElement(React.Fragment, null, rProps.children); },
                        } })))))));
};
export default TextBlock;
//# sourceMappingURL=TextBlock.js.map