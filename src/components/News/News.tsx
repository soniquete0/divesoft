import React from 'react';
import ReactMarkdown from 'react-markdown';

import Media from '@source/partials/Media';
import Button from '@source/partials/Button';

export interface NewsProps {
  data: {
    title?: string;
    shareUrl?: LooseObject;
    firstText: string;
    firstImg?: LooseObject;
    secondText?: string;
    secondImg?: LooseObject;
    thirdImg?: LooseObject;
    thirdText?: string;
    buttonUrl?: LooseObject;
  };
}

const News = (props: NewsProps) => {
  const { 
    title,
    shareUrl,
    firstText,
    firstImg,
    secondText,
    secondImg,
    thirdImg,
    thirdText,
    buttonUrl
   } = props.data;

  return (
    <div className={'news'}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9">
            {title && <h4 className={'news__title'}>{title}</h4>}
          </div>
          <div className="col-12 col-md-3">
            {shareUrl && 
              <div className={'news__btnHolder'}>
                <Button 
                  url={shareUrl} 
                  classes={'btn--bordered news__btnHolder__share'}
                >
                  Share
                </Button>
              </div>}
          </div>
        </div>

        <div className={'news__divider'} />

        {firstText && <div className="row">
            <div className="col-12">
              {firstText && <ReactMarkdown source={firstText} />}
          </div></div>}

        {firstImg && <div className="row">
          <div className="col-12">
            <Media type={'image'} data={firstImg} class={'news__firstImg'} />
          </div></div>}

        {secondText && <div className="row">
          <div className="col-12">
            <ReactMarkdown source={secondText} />
          </div></div>}

        <div className="row">
          <div className="col-12 col-md-6">
            {secondImg && <Media class={'news__secondImg'} type={'image'} data={secondImg} />}
          </div>
          <div className="col-12 col-md-6">
            {thirdImg && <Media class={'news__thirdImg'} type={'image'} data={thirdImg} />}
          </div>
        </div>

        {thirdText && <div className="row">
          <div className="col-12">
            <ReactMarkdown source={thirdText} />
          </div>
        </div>}

        {buttonUrl && 
          <Button classes={'news__btn btn--center'} url={buttonUrl}>All news & events</Button>}
      </div>
    </div>
  );
};

export default News;