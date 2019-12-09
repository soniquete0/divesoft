"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchResults_1 = require("../SearchResults");
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (value) {
            _this.setState({
                searchQuery: value,
            });
        };
        _this.unFocusSearch = function () {
            setTimeout(function () {
                _this.setState({
                    searchFocus: false,
                });
            }, 10);
        };
        _this.focusSearch = function () {
            _this.searchInput.current.focus();
            _this.setState({
                searchFocus: true,
            });
        };
        _this.searchInput = React.createRef();
        _this.searchComponentRef = React.createRef();
        _this.unFocusSearch = _this.unFocusSearch.bind(_this);
        _this.handleEscKey = _this.handleEscKey.bind(_this);
        _this.state = {
            searchFocus: false,
            searchQuery: '',
            value: ''
        };
        return _this;
    }
    Search.prototype.handleEscKey = function (e) {
        if (e.keyCode === 27) {
            console.log('hahah');
            return this.props.handleSearchShow();
        }
    };
    Search.prototype.componentDidMount = function () {
        this.searchInput.current.focus();
        this.searchComponentRef.addEventListener('keydown', this.handleEscKey);
    };
    Search.prototype.componentWillUnmount = function () {
        this.searchComponentRef.removeEventListener('keydown', this.handleEscKey);
    };
    Search.prototype.render = function () {
        var _this = this;
        var _a = this.state, searchFocus = _a.searchFocus, value = _a.value, searchQuery = _a.searchQuery;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'search', ref: function (ref) { return _this.searchComponentRef = ref; } },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "search-input-wrapper" },
                        React.createElement("img", { src: "/assets/divesoft/images/search.svg", className: "search-input-image" }),
                        React.createElement("input", { className: "search-input", type: "text", placeholder: 'search', ref: this.searchInput, onFocus: function () { return _this.focusSearch(); }, onBlur: function () { return setTimeout(function () { return _this.unFocusSearch(); }, 300); }, onChange: function (e) { return _this.handleChange(e.target.value); }, defaultValue: '' }),
                        React.createElement("button", { className: "search-close", onClick: this.props.handleSearchShow },
                            React.createElement("svg", { version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 47.971 47.971" },
                                React.createElement("g", null,
                                    React.createElement("path", { d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" }))))),
                    searchFocus
                        && searchQuery
                        && searchQuery.length > 2
                        && React.createElement(SearchResults_1.default, { searchQuery: searchQuery, active: searchQuery && searchQuery.length > 2, handleSearch: this.handleChange, languageCode: this.props.language, handleSearchShow: this.props.handleSearchShow })))));
    };
    return Search;
}(React.Component));
exports.default = Search;
//# sourceMappingURL=Search.js.map