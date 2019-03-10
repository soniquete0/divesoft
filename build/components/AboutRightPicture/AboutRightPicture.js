import React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';
var AboutRightPicture = function (props) {
    var _a = props.data, title = _a.title, subtitle = _a.subtitle, text = _a.text, img = _a.img;
    return (React.createElement("div", { className: 'aboutRightPicture' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-lg-6" },
                    React.createElement("div", { className: 'aboutRightPicture__content' },
                        title && React.createElement("h2", null, title),
                        subtitle && React.createElement("h4", null, subtitle),
                        text && React.createElement(ReactMarkdown, { source: text }))),
                React.createElement("div", { className: "col-12 col-lg-6" }, img && React.createElement(Media, { type: 'image', data: img }))))));
};
export default AboutRightPicture;
//# sourceMappingURL=AboutRightPicture.js.map