import * as React from 'react';
import { isObjectLike } from 'lodash';
// import WebFont from 'webfontloader';

import {
  AlertNotFound,
  Hero,
  Header,
  Footer,
  Carousel,
  AboutUsHome,
  NewsAndEvents,
  ProductPreviews,
  AboutRightPicture,
  AboutLeftPicture,
  Downloads,
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
    ABOUTUSHOME: 'AboutUsHome',
    NEWSANDEVENTS: 'NewsAndEvents',
    PRODUCTPREVIEWS: 'ProductPreviews',
    ABOUTRIGHTPICTURE: 'AboutRightPicture',
    ABOUTLEFTPICTURE: 'AboutLeftPicture',
    DOWNLOADS: 'Downloads',
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
      case this.Types.ABOUTUSHOME:
        return AboutUsHome;
        case this.Types.NEWSANDEVENTS:
        return NewsAndEvents;
      case this.Types.PRODUCTPREVIEWS:
        return ProductPreviews;
      case this.Types.ABOUTRIGHTPICTURE: 
        return AboutRightPicture;
      case this.Types.ABOUTLEFTPICTURE:
        return AboutLeftPicture;
      case this.Types.DOWNLOADS:
        return Downloads;
      
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