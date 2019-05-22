import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import Media from '../../partials/Media';
import Button from '../../partials/Button';

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
    facebookUrl: LooseObject;
  };
}

const News = (props: NewsProps) => {
  const {
    title,
    firstText,
    firstImg,
    secondText,
    secondImg,
    thirdImg,
    thirdText,
    buttonUrl,
   } = props.data;

  const facebookUrl = window && window.location && window.location.href &&
    'https://www.facebook.com/sharer/sharer.php?u='
    + window.location.href;

  return (
    <div className={'news'}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9">
            {title && <h4 className={'news__title'}>{title}</h4>}
          </div>
          <div className="col-12 col-md-3">
            {facebookUrl &&
              <div className={'news__btnHolder'}>
                <button
                  onClick={() => {
                    window.open(facebookUrl,
                                'Facebook Share',
                                'toolbar=0,status=0,width=640,height=550,top=100,left=100');
                  }}
                  className={'btn btn--bordered news__btnHolder__share'}
                >
                  Share
                </button>
              </div>}
          </div>
        </div>

        <div className={'news__divider'} />

        {firstText && <div className="row">
            <div className="col-12 news__text">
              {firstText && <ReactMarkdown source={firstText} />}
          </div></div>}

        {firstImg && <div className="row">
          <div className="col-12">
            <Media type={'image'} data={firstImg} className={'news__firstImg'} height={'1110'} width={'800'} />
          </div></div>}

        {secondText && <div className="row">
          <div className="col-12 news__text">
            <ReactMarkdown source={secondText} />
          </div></div>}

        <div className="row">
          <div className="col-12 col-md-6">
            {secondImg && <Media className={'news__secondImg'} type={'image'} data={secondImg} height={'540'} width={'540'} />}
          </div>
          <div className="col-12 col-md-6">
            {thirdImg && <Media className={'news__thirdImg'} type={'image'} data={thirdImg} height={'540'} width={'540'} />}
          </div>
        </div>

        {thirdText && <div className="row">
          <div className="col-12 news__text">
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
