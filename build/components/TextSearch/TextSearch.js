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
import * as React from 'react';
import SearchIcon from '../Svg/SearchIcon';
import CloseIcon from '../Svg/CloseIcon';
var TextSearch = /** @class */ (function (_super) {
    __extends(TextSearch, _super);
    function TextSearch(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (value) {
            _this.props.onTextSearchChange(value);
        };
        _this.unFocusSearch = function () {
            _this.setState({
                searchFocus: false,
            });
        };
        _this.focusSearch = function () {
            _this.searchInput.current.focus();
            _this.setState({
                searchFocus: true,
            });
        };
        _this.searchInput = React.createRef();
        _this.state = {
            searchFocus: false,
        };
        return _this;
    }
    TextSearch.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, value = _a.value;
        var searchFocus = this.state.searchFocus;
        return (React.createElement("div", { className: "textSearch " + (value.length !== 0 || searchFocus ? 'textSearch--focused' : '') + " " },
            React.createElement("input", { type: 'text', placeholder: placeholder, ref: this.searchInput, onFocus: function () { return _this.focusSearch(); }, onBlur: function () { return _this.unFocusSearch(); }, onChange: function (e) { return _this.handleChange(e.target.value); }, value: value, defaultValue: '' }),
            value.length > 0 && (React.createElement("div", { className: 'textSearch__clear', onClick: function () {
                    _this.searchInput.current.value = '';
                    _this.handleChange('');
                } },
                React.createElement(CloseIcon, { name: 'gray' }))),
            React.createElement("div", { className: "textSearch__icon", onClick: function () { return _this.focusSearch(); } },
                React.createElement(SearchIcon, { name: value.length !== 0 || searchFocus ? 'red' : 'gray' }))));
    };
    return TextSearch;
}(React.Component));
export default TextSearch;
//# sourceMappingURL=TextSearch.js.map