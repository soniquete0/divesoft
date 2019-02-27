import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';
var TextBlockWithImage = function (props) {
    var _a = props.data, title = _a.title, image = _a.image, text = _a.text;
    return (React.createElement("div", { className: 'text-block-with-image' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'hCenterBlock', style: { maxWidth: 820 } },
                image && React.createElement(Media, { type: 'image', data: image }),
                text && React.createElement(ReactMarkdown, { source: text })))));
};
export default TextBlockWithImage;
//# sourceMappingURL=TextBlockWithImage.js.map