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
import Dots from './components/Dots';
import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.componentWillReceiveProps = function (nextProps) {
            if (_this.state.slides !== nextProps.slides) {
                _this.setState({ slides: nextProps.slides });
            }
        };
        _this.componentWillUnmount = function () { return clearInterval(_this.state.interval); };
        _this.goToNextSlide = function () {
            clearInterval(_this.state.interval);
            if (_this.state.currentIndex === _this.state.slides.length - 1) {
                return _this.setState({
                    currentIndex: 0,
                    translateValue: 0,
                    interval: setInterval(_this.goToNextSlide, _this.props.delay)
                });
            }
            _this.setState(function (prevState) { return ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(_this.slideWidth()),
                interval: setInterval(_this.goToNextSlide, _this.props.delay)
            }); });
        };
        _this.goToPrevSlide = function () {
            clearInterval(_this.state.interval);
            if (_this.state.currentIndex === 0) {
                return _this.setState({
                    currentIndex: _this.state.slides.length - 1,
                    translateValue: (_this.state.slides.length - 1) * -(_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.props.delay)
                });
            }
            _this.setState(function (prevState) { return ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + _this.slideWidth(),
                interval: setInterval(_this.goToNextSlide, _this.props.delay)
            }); });
        };
        _this.goTo = function (index) {
            if (index === _this.state.currentIndex) {
                return;
            }
            clearInterval(_this.state.interval);
            if (index > _this.state.currentIndex) {
                _this.setState({
                    currentIndex: index,
                    translateValue: index * -(_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.props.delay)
                });
            }
            else {
                _this.setState({
                    currentIndex: index,
                    translateValue: _this.state.translateValue + (_this.state.currentIndex - index) * (_this.slideWidth()),
                    interval: setInterval(_this.goToNextSlide, _this.props.delay)
                });
            }
        };
        _this.slideWidth = function () {
            if (document.querySelector('.slider__slide')) {
                if (_this.props.isFullWidth === false) {
                    var container = document.querySelector('.container');
                    var style = getComputedStyle(container);
                    // container width - padding-right/left
                    return parseInt(style.maxWidth, 10) - 30;
                }
                return document.querySelector('.slider__slide').clientWidth;
            }
            else {
                return document.querySelector('iframe').clientWidth;
            }
        };
        _this.state = {
            slides: _this.props.slides,
            interval: null,
            currentIndex: 0,
            translateValue: 0
        };
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        var _a = this.props, autoplay = _a.autoplay, delay = _a.delay;
        if (autoplay) {
            var interval = setInterval(this.goToNextSlide, delay);
            this.setState({ interval: interval });
        }
    };
    Slider.prototype.render = function () {
        return (React.createElement("div", { className: "slider " + this.props.wrapperClasses },
            React.createElement("div", { className: "slider__wrapper", style: {
                    transform: "translateX(" + this.state.translateValue + "px)",
                    transition: 'transform ease-out 0.25s'
                } }, this.state.slides.map(function (slide, i) { return (React.createElement(Slide, { key: i, slide: slide })); })),
            this.props.showArrows ? (React.createElement(React.Fragment, null,
                React.createElement(LeftArrow, { goToPrevSlide: this.goToPrevSlide }),
                React.createElement(RightArrow, { goToNextSlide: this.goToNextSlide }))) : '',
            this.props.showDots ?
                React.createElement(Dots, { goTo: this.goTo, len: this.props.slides.length, currentIndex: this.state.currentIndex }) : ''));
    };
    return Slider;
}(React.Component));
export default Slider;
//# sourceMappingURL=Slider.js.map