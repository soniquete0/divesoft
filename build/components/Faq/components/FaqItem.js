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
var FaqItem = /** @class */ (function (_super) {
    __extends(FaqItem, _super);
    function FaqItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: false
        };
        return _this;
    }
    FaqItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, text = _a.text;
        return (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-12" },
                React.createElement("div", { onClick: function () { return _this.setState({
                        show: !_this.state.show
                    }); }, className: "faq__list__show " + (this.state.show ? 'faq__list__show--minus' : '') }),
                React.createElement("div", { className: 'faq__list__item' },
                    React.createElement("h5", null, title),
                    this.state.show && text && React.createElement(ReactMarkdown, { source: text })),
                React.createElement("div", { className: 'faq__list__divider' }))));
    };
    return FaqItem;
}(React.Component));
export default FaqItem;
//# sourceMappingURL=FaqItem.js.map