"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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
/* tslint:disable */


var PaperClip = function PaperClip(props) {
  return React.createElement("svg", __assign({}, props, {
    className: "paperClip " + ('paperClip--' + props.name),
    version: "1.1",
    viewBox: "0 0 25 25"
  }), React.createElement("g", null, React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    d: "M25.4,13.1c-0.4-0.3-1-0.2-1.3,0.2l-9,12.5c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c-1.3,1.8-3.8,2.2-5.6,0.9\n            c-1.8-1.3-2.2-3.8-0.9-5.6c0,0,0,0,0,0c0,0,0,0,0,0L19.7,5.7c0.9-1.2,2.5-1.5,3.7-0.6C24.6,6,24.9,7.6,24,8.8c0,0-7,9.8-8.1,11.2\n\t\t\t\tc0,0,0,0,0,0c0,0.1-0.1,0.2-0.2,0.2c-0.4,0.5-1.2,0.7-1.7,0.3c-0.5-0.4-0.7-1.2-0.3-1.7c0,0,0.1-0.1,0.1-0.2l5.9-8.2\n\t\t\t\tc0.3-0.4,0.2-1-0.2-1.3c-0.4-0.3-1-0.2-1.3,0.2l-6,8.3c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0c-1,1.4-0.7,3.3,0.7,4.3\n\t\t\t\tc1.4,1,3.3,0.7,4.3-0.7c0-0.1,0.1-0.1,0.1-0.2c0,0,0,0,0,0c0.7-1,8.3-11.4,8.2-11.4c1.3-2,0.8-4.7-1.2-6.2c-2-1.5-4.8-1-6.3,1\n\t\t\t\tc0,0,0,0,0,0L6.9,20.2c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-1.7,2.6-1.1,6.2,1.5,8.1c2.5,1.8,6,1.4,8-1c0,0,0,0,0,0\n\t\t\t\tc0,0,0.2-0.3,0.2-0.3l9.1-12.7C26,14,25.9,13.4,25.4,13.1z"
  })))));
};

var _default = PaperClip;
exports.default = _default;