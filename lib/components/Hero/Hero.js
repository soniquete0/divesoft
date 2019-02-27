"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SearchBar = _interopRequireDefault(require("../SearchBar/SearchBar"));

var _getImageUrl = _interopRequireDefault(require("../../helpers/getImageUrl"));

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

var Hero =
/** @class */
function (_super) {
  __extends(Hero, _super);

  function Hero() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Hero.prototype.render = function () {
    var _a = this.props.data,
        title = _a.title,
        text = _a.text,
        displaySearch = _a.displaySearch,
        image = _a.image,
        placeholder = _a.placeholder,
        displayOverlay = _a.displayOverlay,
        titleColor = _a.titleColor,
        textColor = _a.textColor;
    return React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("section", {
      className: 'hero',
      style: {
        backgroundImage: image && "url(" + (0, _getImageUrl.default)(image) + ")"
      }
    }, displayOverlay && React.createElement("div", {
      className: 'hero__overlay'
    }), React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'hero__holder'
    }, title && React.createElement("h1", {
      className: "hero__title hero__title--" + titleColor
    }, title), text && React.createElement("div", {
      className: "hero__text hero__text--" + textColor + " "
    }, text), displaySearch && React.createElement(_SearchBar.default, {
      placeholder: placeholder ? placeholder : 'Search..',
      barColor: 'lightBlue'
    })))));
  };

  return Hero;
}(React.Component);

var _default = Hero;
exports.default = _default;