import * as React from 'react';

import Button from '../../partials/Button';
import getImageUrl from '../../helpers/getImageUrl';

export interface HeroProps {
  data: {
    title: string;
    text?: string;
    btnTitle?: string;
    url?: LooseObject;
    image?: LooseObject;
    paddingTop?: boolean;
    smallFontSize?: boolean;
  };
}

const Hero = (props: HeroProps) => {
  const {
    url,
    text,
    image,
    title,
    btnTitle,
    paddingTop,
    smallFontSize
  } = props.data;

  return (
    <div className={paddingTop ? 'topWrapper' : ''}>
      <div className={'hero'} style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}>
        <div className="container">
          <div className={'hero__content'}>
            {title && !smallFontSize && <h1>{title}</h1>}
            {title && smallFontSize && <h2>{title}</h2>}
            {text && <p className={'textDescription'}>{text}</p>}
            {btnTitle && <Button url={url}>{btnTitle}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
