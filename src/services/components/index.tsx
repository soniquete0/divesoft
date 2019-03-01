import * as React from 'react';
import { isObjectLike } from 'lodash';
import WebFont from 'webfontloader';

import {
  AlertNotFound,
  Header,
} from '../../components';
import * as resources from './resources';

// WEB FONTS
WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700:latin-ext'],
  },
});

/**
 *
 */
class ComponentsService {
  Types: LooseObject<string> = {
    HEADER: 'Header',
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