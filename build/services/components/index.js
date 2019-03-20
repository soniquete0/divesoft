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
import { AlertNotFound, Faq, Map, News, Hero, Header, Footer, Carousel, Calendar, Firmwares, Downloads, ContactRow, AboutUsHome, ListOfLinks, VideoGallery, PhotoGallery, ProductsMenu, Testimonials, NewsAndEvents, ContactColumns, ProductsPreview, GalleryAndVideo, SpecialCarousel, AboutLeftPicture, AboutRightPicture, ProductComponents, } from '../../components';
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
            FAQ: 'Faq',
            MAP: 'Map',
            NEWS: 'News',
            HERO: 'Hero',
            HEADER: 'Header',
            FOOTER: 'Footer',
            CAROUSEL: 'Carousel',
            CALENDAR: 'Calendar',
            FIRMWARES: 'Firmwares',
            DOWNLOADS: 'Downloads',
            CONTACTROW: 'ContactRow',
            ABOUTUSHOME: 'AboutUsHome',
            LISTOFLINKS: 'ListOfLinks',
            VIDEOGALLERY: 'VideoGallery',
            PHOTOGALLERY: 'PhotoGallery',
            PRODUCTSMENU: 'ProductsMenu',
            TESTIMONIALS: 'Testimonials',
            NEWSANDEVENTS: 'NewsAndEvents',
            CONTACTCOLUMNS: 'ContactColumns',
            PRODUCTSPREVIEW: 'ProductsPreview',
            GALLERYANDVIDEO: 'GalleryAndVideo',
            SPECIALCAROUSEL: 'SpecialCarousel',
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
            case this.Types.FAQ:
                return Faq;
            case this.Types.MAP:
                return Map;
            case this.Types.NEWS:
                return News;
            case this.Types.HERO:
                return Hero;
            case this.Types.HEADER:
                return Header;
            case this.Types.FOOTER:
                return Footer;
            case this.Types.CAROUSEL:
                return Carousel;
            case this.Types.CALENDAR:
                return Calendar;
            case this.Types.FIRMWARES:
                return Firmwares;
            case this.Types.DOWNLOADS:
                return Downloads;
            case this.Types.CONTACTROW:
                return ContactRow;
            case this.Types.ABOUTUSHOME:
                return AboutUsHome;
            case this.Types.LISTOFLINKS:
                return ListOfLinks;
            case this.Types.VIDEOGALLERY:
                return VideoGallery;
            case this.Types.PHOTOGALLERY:
                return PhotoGallery;
            case this.Types.PRODUCTSMENU:
                return ProductsMenu;
            case this.Types.TESTIMONIALS:
                return Testimonials;
            case this.Types.NEWSANDEVENTS:
                return NewsAndEvents;
            case this.Types.CONTACTCOLUMNS:
                return ContactColumns;
            case this.Types.GALLERYANDVIDEO:
                return GalleryAndVideo;
            case this.Types.PRODUCTSPREVIEW:
                return ProductsPreview;
            case this.Types.SPECIALCAROUSEL:
                return SpecialCarousel;
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