"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carousel = exports.footer = exports.header = exports.default = void 0;

var def = _interopRequireWildcard(require("./default.json"));

exports.default = def;

var header = _interopRequireWildcard(require("./header.json"));

exports.header = header;

var footer = _interopRequireWildcard(require("./footer.json"));

exports.footer = footer;

var carousel = _interopRequireWildcard(require("./carousel.json"));

exports.carousel = carousel;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }