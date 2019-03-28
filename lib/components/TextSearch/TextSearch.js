"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SearchIcon = _interopRequireDefault(require("../Svg/SearchIcon"));

var _CloseIcon = _interopRequireDefault(require("../Svg/CloseIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var TextSearch =
/** @class */
function (_super) {
  __extends(TextSearch, _super);

  function TextSearch(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChange = function (value) {
      _this.props.onTextSearchChange(value);
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

    _this.searchInput = React.createRef();
    _this.state = {
      searchFocus: false
    };
    return _this;
  }

  TextSearch.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        placeholder = _a.placeholder,
        value = _a.value;
    var searchFocus = this.state.searchFocus;
    return React.createElement("div", {
      className: "textSearch " + (value.length !== 0 || searchFocus ? 'textSearch--focused' : '') + " "
    }, React.createElement("input", {
      type: 'text',
      placeholder: placeholder,
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
      value: value,
      defaultValue: ''
    }), value.length > 0 && React.createElement("div", {
      className: 'textSearch__clear',
      onClick: function onClick() {
        _this.searchInput.current.value = '';

        _this.handleChange('');
      }
    }, React.createElement(_CloseIcon.default, {
      name: 'gray'
    })), React.createElement("div", {
      className: "textSearch__icon",
      onClick: function onClick() {
        return _this.focusSearch();
      }
    }, React.createElement(_SearchIcon.default, {
      name: value.length !== 0 || searchFocus ? 'red' : 'gray'
    })));
  };

  return TextSearch;
}(React.Component);

var _default = TextSearch;
exports.default = _default;