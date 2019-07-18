"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var components_1 = require("../../components");
var resources = require("./resources");
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
        this.Types = {
            FAQ: 'Faq',
            NEWS: 'News',
            HERO: 'Hero',
            HEADER: 'Header',
            FOOTER: 'Footer',
            CAROUSEL: 'Carousel',
            CALENDAR: 'Calendar',
            FIRMWARES: 'Firmwares',
            DOWNLOADS: 'Downloads',
            ABOUTUSHOME: 'AboutUsHome',
            LISTOFLINKS: 'ListOfLinks',
            CONTACTSMAP: 'ContactsMap',
            VIDEOGALLERY: 'VideoGallery',
            PHOTOGALLERY: 'PhotoGallery',
            PRODUCTSMENU: 'ProductsMenu',
            TESTIMONIALS: 'Testimonials',
            NEWSANDEVENTS: 'NewsAndEvents',
            CONTACTCOLUMNS: 'ContactColumns',
            PRODUCTSPREVIEW: 'ProductsPreview',
            GALLERYANDVIDEO: 'GalleryAndVideo',
            SPECIALCAROUSEL: 'SpecialCarousel',
            SERVIEPOINTSMAP: 'ServicePointsMap',
            ABOUTLEFTPICTURE: 'AboutLeftPicture',
            ABOUTRIGHTPICTURE: 'AboutRightPicture',
            PRODUCTCOMPONENTS: 'ProductComponents',
            PRODUCTMOUNTROUTER: 'ProductMountRouter',
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
                return components_1.Faq;
            case this.Types.NEWS:
                return components_1.News;
            case this.Types.HERO:
                return components_1.Hero;
            case this.Types.HEADER:
                return components_1.Header;
            case this.Types.FOOTER:
                return components_1.Footer;
            case this.Types.CAROUSEL:
                return components_1.Carousel;
            case this.Types.CALENDAR:
                return components_1.Calendar;
            case this.Types.FIRMWARES:
                return components_1.Firmwares;
            case this.Types.DOWNLOADS:
                return components_1.Downloads;
            case this.Types.ABOUTUSHOME:
                return components_1.AboutUsHome;
            case this.Types.LISTOFLINKS:
                return components_1.ListOfLinks;
            case this.Types.VIDEOGALLERY:
                return components_1.VideoGallery;
            case this.Types.PHOTOGALLERY:
                return components_1.PhotoGallery;
            case this.Types.PRODUCTSMENU:
                return components_1.ProductsMenu;
            case this.Types.TESTIMONIALS:
                return components_1.Testimonials;
            case this.Types.NEWSANDEVENTS:
                return components_1.NewsAndEvents;
            case this.Types.CONTACTCOLUMNS:
                return components_1.ContactColumns;
            case this.Types.GALLERYANDVIDEO:
                return components_1.GalleryAndVideo;
            case this.Types.PRODUCTSPREVIEW:
                return components_1.ProductsPreview;
            case this.Types.SPECIALCAROUSEL:
                return components_1.SpecialCarousel;
            case this.Types.SERVIEPOINTSMAP:
                return components_1.ServicePointsMap;
            case this.Types.ABOUTLEFTPICTURE:
                return components_1.AboutLeftPicture;
            case this.Types.ABOUTRIGHTPICTURE:
                return components_1.AboutRightPicture;
            case this.Types.PRODUCTCOMPONENTS:
                return components_1.ProductComponents;
            case this.Types.PRODUCTMOUNTROUTER:
                return components_1.ProductMountRouter;
            case this.Types.CONTACTSMAP:
                return components_1.ContactsMap;
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (lodash_1.isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
exports.default = ComponentsService;
//# sourceMappingURL=index.js.map