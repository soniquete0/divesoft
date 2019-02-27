"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getImgUrl = function getImgUrl(data) {
  var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

  if (data && data.filename) {
    return baseUrl + data.category + data.hash + '_' + data.filename;
  }

  return null;
};

var _default = getImgUrl;
exports.default = _default;