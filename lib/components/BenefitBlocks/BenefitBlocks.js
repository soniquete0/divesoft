"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BenefitBlocks = function BenefitBlocks(props) {
  var _a = props.data,
      title = _a.title,
      benefits = _a.benefits;
  return React.createElement(_List.default, {
    data: benefits
  }, function (_a) {
    var data = _a.data;
    return React.createElement("div", {
      className: 'benefit-blocks'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'benefit-blocks__divider'
    }), title && React.createElement("h3", null, title), React.createElement("div", {
      className: 'benefit-blocks__list grid'
    }, data && data.map(function (benefit, i) {
      return React.createElement("div", {
        key: i,
        className: 'benefit-blocks__list__item grid'
      }, React.createElement("div", {
        className: 'benefit-blocks__list__item__top'
      }, benefit.icon && React.createElement(_Media.default, {
        type: 'image',
        data: benefit.icon
      }), benefit.title && React.createElement("h5", null, benefit.title), benefit.subtitle && React.createElement("p", {
        className: 'benefit-blocks__list__item__top__subtitle'
      }, benefit.subtitle), benefit.text && React.createElement(_reactMarkdown.default, {
        source: benefit.text,
        className: 'benefit-blocks__list__item__top__text'
      }), benefit.gradientText && React.createElement(_reactMarkdown.default, {
        source: benefit.gradientText,
        className: 'benefit-blocks__list__item__top__gradient-text'
      }), benefit.logo && React.createElement(_Media.default, {
        type: 'image',
        data: benefit.logo
      })), React.createElement("div", {
        className: 'benefit-blocks__list__item__bottom grid'
      }, benefit.bottomText && React.createElement(_reactMarkdown.default, {
        source: benefit.bottomText
      })));
    })), React.createElement("div", {
      className: 'benefit-blocks__divider'
    })));
  });
};

var _default = BenefitBlocks;
exports.default = _default;