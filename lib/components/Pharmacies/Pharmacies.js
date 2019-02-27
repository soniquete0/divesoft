"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Pharmacies = function Pharmacies(props) {
  var pharmacies = props.data.pharmacies;
  return React.createElement(_List.default, {
    data: pharmacies
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: 'pharmacies'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'pharmacies__divider'
    }, React.createElement("div", null, React.createElement("img", {
      src: '/assets/divesoft/images/pharmacies-divider-ad.png'
    })), React.createElement("div", null, React.createElement("img", {
      src: '/assets/divesoft/images/pharmacies-divider.png'
    })), React.createElement("div", null, React.createElement("img", {
      src: '/assets/divesoft/images/pharmacies-divider-ad.png'
    })), React.createElement("br", {
      style: {
        clear: 'both'
      }
    })), React.createElement("div", {
      className: 'pharmacies__list grid'
    }, data && data.map(function (pharmacie, i) {
      return React.createElement("div", {
        key: i,
        className: 'pharmacies__list__item'
      }, pharmacie.image && React.createElement(_Media.default, {
        type: 'image',
        data: pharmacie.image
      }), pharmacie.text && React.createElement(_reactMarkdown.default, {
        source: pharmacie.text
      }));
    }))));
  });
};

var _default = Pharmacies;
exports.default = _default;