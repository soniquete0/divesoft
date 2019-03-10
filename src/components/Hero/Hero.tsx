import * as React from 'react';

import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

export interface HeroProps {
  data: {
    title: string;
    text?: string;
    btnTitle?: string;
    url?: LooseObject;
    image?: LooseObject;
    paddingTop: boolean;
  };
}

const Hero = (props: HeroProps) => {
  const { 
    url,
    text,
    image,
    title,
    btnTitle,
    paddingTop
  } = props.data;
  
  return (
    <div className={paddingTop ? 'topWrapper' : ''}>
      <div className={'hero'} style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}>
        <div className="container">
          <div className={'hero__content'}>
            {title && <h1>{title}</h1>}
            {text && <p>{text}</p>}
            {btnTitle && url && <Button url={url}>{btnTitle}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;