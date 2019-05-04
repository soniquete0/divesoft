"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactCookieConsent = _interopRequireDefault(require("react-cookie-consent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CookiePopup = function CookiePopup() {
  function renderBanner() {
    return React.createElement("div", {
      className: "cookiePopup"
    }, React.createElement("img", {
      src: "/assets/divesoft/images/cookie.svg",
      alt: "cookies"
    }), React.createElement("p", null, "This website uses cookies to ensure you get the best experience on our website.", ' ', React.createElement("a", {
      href: 'https://cookiesandyou.com/',
      target: '_blank'
    }, "Learn more")));
  }

  return React.createElement(_reactCookieConsent.default, {
    expires: 365,
    location: 'bottom',
    cookieName: 'DivesoftCookies',
    acceptOnScroll: false,
    buttonText: 'Got it!',
    acceptOnScrollPercentage: 100,
    style: {
      background: '#efefef',
      color: '#343434'
    },
    buttonStyle: {
      background: '#e50000',
      color: '#ffffff',
      fontSize: '16px'
    }
  }, renderBanner());
};

var _default = CookiePopup;
exports.default = _default;