import * as React from 'react';
import { isObjectLike } from 'lodash';
// import WebFont from 'webfontloader';

import {
  AlertNotFound,
  Hero,
  Header,
  Footer,
  Carousel,
  Downloads,
  AboutUsHome,
  ProductsMenu,
  NewsAndEvents,
  ProductsPreview,
  GalleryAndVideo,
  AboutLeftPicture,
  AboutRightPicture,
  ProductComponents,
} from '../../components';

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
class ComponentsService {
  Types: LooseObject<string> = {
    HERO: 'Hero',
    HEADER: 'Header',
    FOOTER: 'Footer',
    CAROUSEL: 'Carousel',
    DOWNLOADS: 'Downloads',
    ABOUTUSHOME: 'AboutUsHome',
    PRODUCTSMENU: 'ProductsMenu',
    NEWSANDEVENTS: 'NewsAndEvents',
    PRODUCTSPREVIEW: 'ProductsPreview',
    GALLERYANDVIDEO: 'GalleryAndVideo',
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
      case this.Types.GALLERYANDVIDEO:
        return GalleryAndVideo;
      case this.Types.PRODUCTSPREVIEW:
        return ProductsPreview;
      case this.Types.ABOUTLEFTPICTURE:
        return AboutLeftPicture;
      case this.Types.ABOUTRIGHTPICTURE: 
        return AboutRightPicture;
      case this.Types.PRODUCTCOMPONENTS:
        return ProductComponents;
      
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