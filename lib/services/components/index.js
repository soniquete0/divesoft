"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _components = require("../../components");

var resources = _interopRequireWildcard(require("./resources"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var ComponentsService =
/** @class */
function () {
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
      PRODUCTCOMPONENTS: 'ProductComponents'
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
        return _components.Faq;

      case this.Types.NEWS:
        return _components.News;

      case this.Types.HERO:
        return _components.Hero;

      case this.Types.HEADER:
        return _components.Header;

      case this.Types.FOOTER:
        return _components.Footer;

      case this.Types.CAROUSEL:
        return _components.Carousel;

      case this.Types.CALENDAR:
        return _components.Calendar;

      case this.Types.FIRMWARES:
        return _components.Firmwares;

      case this.Types.DOWNLOADS:
        return _components.Downloads;

      case this.Types.ABOUTUSHOME:
        return _components.AboutUsHome;

      case this.Types.LISTOFLINKS:
        return _components.ListOfLinks;

      case this.Types.VIDEOGALLERY:
        return _components.VideoGallery;

      case this.Types.PHOTOGALLERY:
        return _components.PhotoGallery;

      case this.Types.PRODUCTSMENU:
        return _components.ProductsMenu;

      case this.Types.TESTIMONIALS:
        return _components.Testimonials;

      case this.Types.NEWSANDEVENTS:
        return _components.NewsAndEvents;

      case this.Types.CONTACTCOLUMNS:
        return _components.ContactColumns;

      case this.Types.GALLERYANDVIDEO:
        return _components.GalleryAndVideo;

      case this.Types.PRODUCTSPREVIEW:
        return _components.ProductsPreview;

      case this.Types.SPECIALCAROUSEL:
        return _components.SpecialCarousel;

      case this.Types.SERVIEPOINTSMAP:
        return _components.ServicePointsMap;

      case this.Types.ABOUTLEFTPICTURE:
        return _components.AboutLeftPicture;

      case this.Types.ABOUTRIGHTPICTURE:
        return _components.AboutRightPicture;

      case this.Types.PRODUCTCOMPONENTS:
        return _components.ProductComponents;

      case this.Types.CONTACTSMAP:
        return _components.ContactsMap;

      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "component"
          });
        };
    }
  };
  /***/


  ComponentsService.prototype.getComponentResource = function (type) {
    var res = resources.default;
    var typedRes = resources[type.toLowerCase()];

    if ((0, _lodash.isObjectLike)(typedRes)) {
      res = __assign({}, res, typedRes);
    }

    return res;
  };

  ComponentsService.prototype.getForm = function (type) {
    switch (type) {
      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "form"
          });
        };
    }
  };

  return ComponentsService;
}();

var _default = ComponentsService;
exports.default = _default;