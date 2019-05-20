"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getImgUrl = function (data) {
    var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
    if (data && data.filename) {
        return baseUrl + data.category + data.hash + '_' + data.filename;
    }
    return null;
};
exports.default = getImgUrl;
//# sourceMappingURL=getImageUrl.js.map