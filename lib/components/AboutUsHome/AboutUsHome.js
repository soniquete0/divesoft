"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

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

var AboutUsHome =
/** @class */
function (_super) {
  __extends(AboutUsHome, _super);

  function AboutUsHome(props) {
    var _this = _super.call(this, props) || this;

    _this.toggleHover = function () {
      return _this.setState({
        hover: !_this.state.hover
      });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  AboutUsHome.prototype.render = function () {
    var _a = this.props.data,
        leftTitle = _a.leftTitle,
        leftSubtitle = _a.leftSubtitle,
        leftText = _a.leftText,
        leftUrl = _a.leftUrl,
        leftBtnTitle = _a.leftBtnTitle,
        leftImg = _a.leftImg,
        rightTitle = _a.rightTitle,
        rightSubtitle = _a.rightSubtitle,
        rightText = _a.rightText,
        rightUrl = _a.rightUrl,
        rightBtnTitle = _a.rightBtnTitle,
        rightImg = _a.rightImg;
    return React.createElement("div", {
      className: 'aboutUsHome'
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-12 col-xl-6"
    }, React.createElement("div", {
      className: 'aboutUsHome__block',
      style: this.state.hover ? {
        backgroundImage: leftImg && "url(" + (0, _getImageUrl.default)(leftImg) + ")"
      } : {
        background: 'white !important'
      }
    }, leftTitle && React.createElement("h3", {
      style: this.state.hover ? {
        color: '#ffffff'
      } : {
        color: '#343434'
      }
    }, leftTitle), leftSubtitle && React.createElement("h4", null, leftSubtitle), leftText && React.createElement("p", {
      style: this.state.hover ? {
        color: '#ffffff'
      } : {
        color: '#6c6c6c'
      }
    }, leftText), leftUrl && leftBtnTitle && React.createElement(_Button.default, {
      url: leftUrl
    }, leftBtnTitle))), React.createElement("div", {
      className: "col-12 col-xl-6"
    }, React.createElement("div", {
      className: 'aboutUsHome__block aboutUsHome__block--right',
      onMouseEnter: this.toggleHover,
      onMouseLeave: this.toggleHover,
      style: !this.state.hover ? {
        backgroundImage: rightImg && "url(" + (0, _getImageUrl.default)(rightImg) + ")"
      } : {
        background: 'white !important'
      }
    }, rightTitle && React.createElement("h3", null, rightTitle), rightSubtitle && React.createElement("h4", null, rightSubtitle), rightText && React.createElement("p", null, rightText), rightUrl && rightBtnTitle && React.createElement(_Button.default, {
      url: rightUrl
    }, rightBtnTitle))))));
  };

  return AboutUsHome;
}(React.Component);

var _default = AboutUsHome;
exports.default = _default;