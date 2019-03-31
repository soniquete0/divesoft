var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import ReactMarkdown from 'react-markdown';
import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';
var SpecialCarousel = /** @class */ (function (_super) {
    __extends(SpecialCarousel, _super);
    function SpecialCarousel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SpecialCarousel.prototype.renderSlides = function (data) {
        if (data.length < 1) {
            return;
        }
        var result = [];
        data.map(function (slide, i) {
            result.push(React.createElement("div", { key: i, className: 'specialCarousel' },
                React.createElement("div", { className: "specialCarousel__content" },
                    React.createElement("div", { className: "container" },
                        slide.title &&
                            React.createElement("h2", { style: slide.isBackgroundBlack ? { color: 'white' } : {} }, slide.title),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "specialCarousel__content__info col-12 col-md-8 col-lg-8 col-xl-6" },
                                slide.subTitle &&
                                    React.createElement("h3", { style: slide.isBackgroundBlack ? { color: 'white' } : {} },
                                        React.createElement("span", { style: { color: '#e50000' } }, "0" + (i + 1) + ". "),
                                        slide.subTitle),
                                slide.description &&
                                    React.createElement("div", { className: "specialCarousel__content__info__description" }, slide.description && React.createElement(ReactMarkdown, { source: slide.description })),
                                React.createElement("div", { className: 'specialCarousel__content__downloads' },
                                    React.createElement("div", { className: 'specialCarousel__content__downloads__item' },
                                        React.createElement(Link, { url: slide.firstUrl && slide.firstUrl.url },
                                            React.createElement(Media, { type: 'image', data: slide.firstDocImg })),
                                        slide.firstUrl && React.createElement("p", null, slide.firstDocText)),
                                    React.createElement("div", { className: 'specialCarousel__content__downloads__item' },
                                        React.createElement(Link, { url: slide.secondUrl && slide.secondUrl.url },
                                            React.createElement(Media, { type: 'image', data: slide.secondDocImg })),
                                        slide.secondUrl && React.createElement("p", null, slide.secondDocText)))),
                            React.createElement("div", { className: "specialCarousel__content__info col-12 col-md-4 col-lg-4 col-xl-6" },
                                React.createElement(Media, { type: 'image', data: slide.productImg }))))),
                React.createElement(Media, { key: i, type: 'image', data: slide.image })));
        });
        return result;
    };
    SpecialCarousel.prototype.render = function () {
        var _this = this;
        return (React.createElement(List, { data: this.props.data.slides }, function (_a) {
            var data = _a.data;
            return React.createElement(Slider, { delay: 10000, slides: _this.renderSlides(data), autoplay: _this.props.data.slides.length <= 1 ? false : true, showDots: _this.props.data.slides.length <= 1 ? false : true, showArrows: _this.props.data.slides.length <= 1 ? false : true });
        }));
    };
    return SpecialCarousel;
}(React.Component));
export default SpecialCarousel;
//# sourceMappingURL=SpecialCarousel.js.map