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
import { AlertNotFound, Hero, Header, Footer, Carousel, Downloads, AboutUsHome, ProductsMenu, NewsAndEvents, ProductsPreview, AboutLeftPicture, AboutRightPicture, ProductComponents, } from '../../components';
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
            HERO: 'Hero',
            HEADER: 'Header',
            FOOTER: 'Footer',
            CAROUSEL: 'Carousel',
            DOWNLOADS: 'Downloads',
            ABOUTUSHOME: 'AboutUsHome',
            PRODUCTSMENU: 'ProductsMenu',
            NEWSANDEVENTS: 'NewsAndEvents',
            PRODUCTSPREVIEW: 'ProductsPreview',
            ABOUTLEFTPICTURE: 'AboutLeftPicture',
            ABOUTRIGHTPICTURE: 'AboutRightPicture',
            PRODUCTCOMPONENTS: 'ProductComponents',
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
            case this.Types.HERO:
                return Hero;
            case this.Types.HEADER:
                return Header;
            case this.Types.FOOTER:
                return Footer;
            case this.Types.CAROUSEL:
                return Carousel;
            case this.Types.DOWNLOADS:
                return Downloads;
            case this.Types.ABOUTUSHOME:
                return AboutUsHome;
            case this.Types.PRODUCTSMENU:
                return ProductsMenu;
            case this.Types.NEWSANDEVENTS:
                return NewsAndEvents;
            case this.Types.PRODUCTSPREVIEW:
                return ProductsPreview;
            case this.Types.ABOUTLEFTPICTURE:
                return AboutLeftPicture;
            case this.Types.ABOUTRIGHTPICTURE:
                return AboutRightPicture;
            case this.Types.PRODUCTCOMPONENTS:
                return ProductComponents;
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