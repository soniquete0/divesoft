import * as React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePopup = () => {

  function renderBanner () {
    return (
      <div className={`cookiePopup`}>
        <img src="/assets/divesoft/images/cookie.svg" alt="cookies"/>
        <p>
          This website uses cookies to ensure you get the best experience on our website.{' '}
          <a href={'https://cookiesandyou.com/'} target={'_blank'}>Learn more</a>
        </p>
      </div>
    );
  }

  return (
    <CookieConsent
      expires={365}
      location={'bottom'}
      cookieName={'DivesoftCookies'}
      acceptOnScroll={false}
      buttonText={'Got it!'}
      acceptOnScrollPercentage={100}
      style={{ background: '#efefef', color: '#343434' }}
      buttonStyle={{ background: '#e50000', color: '#ffffff', fontSize: '16px' }}
    >
      {renderBanner()}
    </CookieConsent>
  );
};

export default CookiePopup;