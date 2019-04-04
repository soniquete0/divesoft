"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchResults = _interopRequireDefault(require("../SearchResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Search =
/** @class */
function (_super) {
  __extends(Search, _super);

  function Search(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChange = function (value) {
      _this.setState({
        searchQuery: value
      });
    };

    _this.unFocusSearch = function () {
      _this.setState({
        searchFocus: false
      });
    };

    _this.focusSearch = function () {
      _this.searchInput.current.focus();

      _this.setState({
        searchFocus: true
      });
    };

    _this.searchInput = _react.default.createRef();
    _this.state = {
      searchFocus: false,
      searchQuery: '',
      value: ''
    };
    return _this;
  }

  Search.prototype.render = function () {
    var _this = this;

    var _a = this.state,
        searchFocus = _a.searchFocus,
        value = _a.value,
        searchQuery = _a.searchQuery;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: 'search'
    }, _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement("input", {
      type: "text",
      placeholder: 'search',
      ref: this.searchInput,
      onFocus: function onFocus() {
        return _this.focusSearch();
      },
      onBlur: function onBlur() {
        return _this.unFocusSearch();
      },
      onChange: function onChange(e) {
        return _this.handleChange(e.target.value);
      },
      defaultValue: ''
    }))), searchFocus && searchQuery && searchQuery.length > 0 && _react.default.createElement(_SearchResults.default, {
      searchQuery: searchQuery,
      active: searchQuery && searchQuery.length > 1,
      handleSearch: this.handleChange,
      languageCode: this.props.language
    }));
  };

  return Search;
}(_react.default.Component);

var _default = Search;
exports.default = _default;