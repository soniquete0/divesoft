import * as React from 'react';
import { isObjectLike } from 'lodash';
// import WebFont from 'webfontloader';

import {
  AlertNotFound,
  Header,
  Footer,
  AboutUs,
  Carousel,
  NewsAndEvents,
  ProductPreviews,
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
    HEADER: 'Header',
    FOOTER: 'Footer',
    ABOUTUS: 'AboutUs',
    CAROUSEL: 'Carousel',
    NEWSANDEVENTS: 'NewsAndEvents',
    PRODUCTPREVIEWS: 'ProductPreviews',
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
      case this.Types.HEADER:
        return Header;
      case this.Types.FOOTER:
        return Footer;
      case this.Types.ABOUTUS:
        return AboutUs;
      case this.Types.CAROUSEL:
        return Carousel;
      case this.Types.NEWSANDEVENTS:
        return NewsAndEvents;
      case this.Types.PRODUCTPREVIEWS:
        return ProductPreviews;
        
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