import * as React from 'react';
import { isObjectLike } from 'lodash';

import {
  AlertNotFound,
  Faq,
  Map,
  News,
  Hero,
  Header,
  Footer,
  Carousel,
  Calendar,
  Firmwares,
  Downloads,
  AboutUsHome,
  ListOfLinks,
  ContactsMap,
  VideoGallery,
  PhotoGallery,
  ProductsMenu,
  Testimonials,
  NewsAndEvents,
  ContactColumns,
  ProductsPreview,
  GalleryAndVideo,
  SpecialCarousel,
  AboutLeftPicture,
  ServicePointsMap,
  AboutRightPicture,
  ProductComponents,
} from '../../components';

import * as resources from './resources';

class ComponentsService {
  Types: LooseObject<string> = {
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
  };

  /***/
  getAllowedTypes() {
    const res = Object.keys(this.Types).map(key => {
      return this.Types[key];
    });
    return res;
  }

  /***/
  getComponent(type: string) {
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
      case this.Types.SERVIEPOINTSMAP:
        return ServicePointsMap;
      case this.Types.ABOUTLEFTPICTURE:
        return AboutLeftPicture;
      case this.Types.ABOUTRIGHTPICTURE: 
        return AboutRightPicture;
      case this.Types.PRODUCTCOMPONENTS:
        return ProductComponents;
      case this.Types.CONTACTSMAP:
        return ContactsMap;
      
      default:
        return () => <AlertNotFound type="component" />;
    }
  }

  /***/
  getComponentResource(type: string) {
    let res = resources.default;
    const typedRes: LooseObject = resources[type.toLowerCase()];
    if (isObjectLike(typedRes)) {
      res = {
        ...res,
        ...typedRes,
      };
    }

    return res;
  }

  getForm(type: string) {
    switch (type) {
      default:
        return () => <AlertNotFound type="form" />;
    }
  }
}

export default ComponentsService;