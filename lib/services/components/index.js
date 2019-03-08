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
var ComponentsService =
/** @class */
function () {
  function ComponentsService() {
    this.Types = {
      HEADER: 'Header',
      FOOTER: 'Footer',
      CAROUSEL: 'Carousel',
      PRODUCTPREVIEWS: 'ProductPreviews'
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
        return _components.Header;

      case this.Types.FOOTER:
        return _components.Footer;

      case this.Types.CAROUSEL:
        return _components.Carousel;

      case this.Types.PRODUCTPREVIEWS:
        return _components.ProductPreviews;

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