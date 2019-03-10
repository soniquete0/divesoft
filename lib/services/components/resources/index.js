"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productpreviews = exports.newsandevents = exports.aboutushome = exports.carousel = exports.footer = exports.header = exports.hero = exports.default = void 0;

var def = _interopRequireWildcard(require("./default.json"));

exports.default = def;

var hero = _interopRequireWildcard(require("./hero.json"));

exports.hero = hero;

var header = _interopRequireWildcard(require("./header.json"));

exports.header = header;

var footer = _interopRequireWildcard(require("./footer.json"));

exports.footer = footer;

var carousel = _interopRequireWildcard(require("./carousel.json"));

exports.carousel = carousel;

var aboutushome = _interopRequireWildcard(require("./aboutushome.json"));

exports.aboutushome = aboutushome;

var newsandevents = _interopRequireWildcard(require("./newsandevents.json"));

exports.newsandevents = newsandevents;

var productpreviews = _interopRequireWildcard(require("./productpreviews.json"));

exports.productpreviews = productpreviews;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }