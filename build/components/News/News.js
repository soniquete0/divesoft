"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var Media_1 = require("@source/partials/Media");
var Button_1 = require("@source/partials/Button");
var News = function (props) {
    var _a = props.data, title = _a.title, firstText = _a.firstText, firstImg = _a.firstImg, secondText = _a.secondText, secondImg = _a.secondImg, thirdImg = _a.thirdImg, thirdText = _a.thirdText, buttonUrl = _a.buttonUrl;
    var facebookUrl = window && window.location && window.location.href &&
        'https://www.facebook.com/sharer/sharer.php?u='
            + window.location.href;
    return (React.createElement("div", { className: 'news' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-md-9" }, title && React.createElement("h4", { className: 'news__title' }, title)),
                React.createElement("div", { className: "col-12 col-md-3" }, facebookUrl &&
                    React.createElement("div", { className: 'news__btnHolder' },
                        React.createElement("button", { onClick: function () {
                                window.open(facebookUrl, 'Facebook Share', 'toolbar=0,status=0,width=640,height=550,top=100,left=100');
                            }, className: 'btn btn--bordered news__btnHolder__share' }, "Share")))),
            React.createElement("div", { className: 'news__divider' }),
            firstText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 news__text" }, firstText && React.createElement(ReactMarkdown, { source: firstText }))),
            firstImg && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement(Media_1.default, { type: 'image', data: firstImg, className: 'news__firstImg', height: '1110', width: '800' }))),
            secondText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 news__text" },
                    React.createElement(ReactMarkdown, { source: secondText }))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 col-md-6" }, secondImg && React.createElement(Media_1.default, { className: 'news__secondImg', type: 'image', data: secondImg, height: '540', width: '540' })),
                React.createElement("div", { className: "col-12 col-md-6" }, thirdImg && React.createElement(Media_1.default, { className: 'news__thirdImg', type: 'image', data: thirdImg, height: '540', width: '540' }))),
            thirdText && React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 news__text" },
                    React.createElement(ReactMarkdown, { source: thirdText }))),
            buttonUrl &&
                React.createElement(Button_1.default, { classes: 'news__btn btn--center', url: buttonUrl }, "All news & events"))));
};
exports.default = News;
//# sourceMappingURL=News.js.map