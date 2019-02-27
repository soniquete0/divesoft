"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PharmacieInfo = function PharmacieInfo(props) {
  var _a = props.data,
      geo = _a.geo,
      phone = _a.phone,
      transport = _a.transport,
      transportImage = _a.transportImage,
      officeHours = _a.officeHours;
  return React.createElement("div", {
    className: 'pharmacie-info'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'pharmacie-info__top-divider'
  }), React.createElement("div", {
    className: 'pharmacie-info__content'
  }, React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/divesoft/images/phoneIcon.svg',
    alt: "phone nubmer"
  }), phone && React.createElement("p", null, phone)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/divesoft/images/geoIcon.svg',
    alt: "address"
  }), geo && React.createElement("p", null, geo)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, React.createElement("img", {
    src: '/assets/divesoft/images/officeHours.svg',
    alt: "office hours"
  }), officeHours && React.createElement("p", null, officeHours)), React.createElement("div", {
    className: 'pharmacie-info__content__item'
  }, transportImage && React.createElement(_Media.default, {
    type: 'image',
    data: transportImage
  }) || React.createElement("img", {
    src: '/assets/divesoft/images/metro.svg',
    alt: "metro"
  }), transport && React.createElement("p", null, transport))), React.createElement("div", {
    className: 'pharmacie-info__bottom-divider'
  })));
};

var _default = PharmacieInfo;
exports.default = _default;