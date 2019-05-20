"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var Media_1 = require("@source/partials/Media");
var AboutLeftPicture = function (props) {
    var _a = props.data, title = _a.title, subtitle = _a.subtitle, text = _a.text, img = _a.img, paddingTop = _a.paddingTop;
    return (React.createElement("div", { className: 'aboutLeftPicture', style: paddingTop ? { paddingTop: 0 } : {} },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-lg-6" }, img && React.createElement(Media_1.default, { type: 'image', data: img })),
                React.createElement("div", { className: "col-12 col-lg-6" },
                    React.createElement("div", { className: 'aboutLeftPicture__content' },
                        title && React.createElement("h2", null, title),
                        subtitle && React.createElement("h4", null, subtitle),
                        text && React.createElement(ReactMarkdown, { source: text })))))));
};
exports.default = AboutLeftPicture;
//# sourceMappingURL=AboutLeftPicture.js.map