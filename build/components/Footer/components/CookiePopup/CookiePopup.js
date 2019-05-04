import * as React from 'react';
import CookieConsent from 'react-cookie-consent';
var CookiePopup = function () {
    function renderBanner() {
        return (React.createElement("div", { className: "cookiePopup" },
            React.createElement("img", { src: "/assets/divesoft/images/cookie.svg", alt: "cookies" }),
            React.createElement("p", null,
                "This website uses cookies to ensure you get the best experience on our website.",
                ' ',
                React.createElement("a", { href: 'https://cookiesandyou.com/', target: '_blank' }, "Learn more"))));
    }
    return (React.createElement(CookieConsent, { expires: 365, location: 'bottom', cookieName: 'DivesoftCookies', acceptOnScroll: false, buttonText: 'Got it!', acceptOnScrollPercentage: 100, style: { background: '#efefef', color: '#343434' }, buttonStyle: { background: '#e50000', color: '#ffffff', fontSize: '16px' } }, renderBanner()));
};
export default CookiePopup;
//# sourceMappingURL=CookiePopup.js.map