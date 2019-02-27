"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _title = _interopRequireDefault(require("./components/title"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PharmaciesList = function PharmaciesList(props) {
  var pharmacies = props.data.pharmacies;
  return React.createElement(_List.default, {
    data: pharmacies
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: "polyclinicsList"
    }, data && data.map(function (pharmacie, index) {
      return React.createElement("div", {
        className: 'pcitem',
        key: index
      }, React.createElement("div", {
        className: "fullWidthContainer"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "pcitem__wrapper"
      }, React.createElement("div", {
        className: 'pcitem__img'
      }, pharmacie.image && React.createElement(_Media.default, {
        data: pharmacie.image,
        type: "image"
      })), React.createElement("div", {
        className: 'pcitem__info'
      }, React.createElement(_title.default, {
        name: pharmacie.name && pharmacie.name
      }), React.createElement("div", {
        className: "pcitem__info__details"
      }, React.createElement("div", {
        className: "pcitem__info__details__item"
      }, React.createElement("img", {
        src: "../../../assets/divesoft/images/geoIcon.svg",
        alt: "Medicon GeoLocation Icon"
      }), React.createElement("p", null, pharmacie.address && pharmacie.address, " ", React.createElement("br", null), pharmacie.district && pharmacie.district)), React.createElement("div", {
        className: "pcitem__info__details__item"
      }, React.createElement("img", {
        src: "../../../assets/divesoft/images/phoneIcon.svg",
        alt: "Medicon Phone Icon"
      }), React.createElement("p", null, pharmacie.phone && pharmacie.phone)), React.createElement("div", {
        className: "pcitem__info__details__item"
      }, pharmacie.transportImage && React.createElement(_Media.default, {
        data: pharmacie.transportImage,
        type: "image"
      }), !pharmacie.transportImage && React.createElement("img", {
        src: "../../../assets/divesoft/images/metro.svg",
        alt: ""
      }), React.createElement("p", null, pharmacie.transport && pharmacie.transport, React.createElement("br", null), pharmacie.station && pharmacie.station))), pharmacie.services && React.createElement("div", {
        className: 'pcitem__info__list'
      }, React.createElement(_reactMarkdown.default, {
        source: pharmacie.services,
        renderers: {
          // tslint:disable-next-line:no-any
          paragraph: function paragraph(rProps) {
            return React.createElement("ul", null, rProps.children);
          }
        }
      })), pharmacie.description && React.createElement("div", {
        className: 'pcitem__info__desc'
      }, React.createElement("div", {
        className: 'pcitem__info__desc__txt'
      }, React.createElement(_reactMarkdown.default, {
        source: pharmacie.description,
        renderers: {
          // tslint:disable-next-line:no-any
          paragraph: function paragraph(rProps) {
            return React.createElement("p", null, rProps.children);
          }
        }
      }))), React.createElement("div", {
        className: 'pcitem__info__btnHolder'
      }, React.createElement(_Button.default, {
        classes: "btn btn--greenBorder"
      }, "vice info")))))));
    }));
  });
};

var _default = PharmaciesList;
exports.default = _default;