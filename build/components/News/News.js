import React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '@source/partials/Media';
import Button from '@source/partials/Button';
var News = function (props) {
    var _a = props.data, title = _a.title, shareUrl = _a.shareUrl, firstText = _a.firstText, firstImg = _a.firstImg, secondText = _a.secondText, secondImg = _a.secondImg, thirdImg = _a.thirdImg, thirdText = _a.thirdText, buttonUrl = _a.buttonUrl;
    return (React.createElement("div", { className: 'news' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-md-9" }, title && React.createElement("h4", { className: 'news__title' }, title)),
                React.createElement("div", { className: "col-12 col-md-3" }, shareUrl &&
                    React.createElement("div", { className: 'news__btnHolder' },
                        React.createElement(Button, { url: shareUrl, classes: 'btn--bordered news__btnHolder__share' }, "Share")))),
            React.createElement("div", { className: 'news__divider' }),
            firstText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" }, firstText && React.createElement(ReactMarkdown, { source: firstText }))),
            firstImg && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement(Media, { type: 'image', data: firstImg, class: 'news__firstImg' }))),
            secondText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement(ReactMarkdown, { source: secondText }))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-md-6" }, secondImg && React.createElement(Media, { class: 'news__secondImg', type: 'image', data: secondImg })),
                React.createElement("div", { className: "col-12 col-md-6" }, thirdImg && React.createElement(Media, { class: 'news__thirdImg', type: 'image', data: thirdImg }))),
            thirdText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement(ReactMarkdown, { source: thirdText }))),
            buttonUrl &&
                React.createElement(Button, { classes: 'news__btn btn--center', url: buttonUrl }, "All news & events"))));
};
export default News;
//# sourceMappingURL=News.js.map