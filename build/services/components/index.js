var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { isObjectLike } from 'lodash';
// import WebFont from 'webfontloader';
import { AlertNotFound, Header, Footer, Carousel, ProductPreviews, } from '../../components';
import * as resources from './resources';
// WEB FONTS
// WebFont.load({
//   custom: {
//     families: ['Corridor'],
//     urls: ['/styles/fonts.css']
//   }
// });
/**
 *
 */
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
        this.Types = {
            HEADER: 'Header',
            FOOTER: 'Footer',
            CAROUSEL: 'Carousel',
            PRODUCTPREVIEWS: 'ProductPreviews',
        };
    }
    /***/
    ComponentsService.prototype.getAllowedTypes = function () {
        var _this = this;
        var res = Object.keys(this.Types).map(function (key) {
            return _this.Types[key];
        });
        return res;
    };
    /***/
    ComponentsService.prototype.getComponent = function (type) {
        switch (type) {
            case this.Types.HEADER:
                return Header;
            case this.Types.FOOTER:
                return Footer;
            case this.Types.CAROUSEL:
                return Carousel;
            case this.Types.PRODUCTPREVIEWS:
                return ProductPreviews;
            default:
                return function () { return React.createElement(AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
export default ComponentsService;
//# sourceMappingURL=index.js.map