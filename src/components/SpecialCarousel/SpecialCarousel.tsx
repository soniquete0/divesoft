import * as React from 'react';
import Slider from 'react-slick';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import NextArrow from '../../partials/NextArrow';
import PrevArrow from '../../partials/PrevArrow';
import getImageUrl from '../../helpers/getImageUrl';

interface Slide {
  image: LooseObject;
  title?: string;
  subTitle?: string;
  description?: string;
  productImg?: LooseObject;
  isBackgroundBlack?: boolean;

  firstDocImg?: LooseObject;
  firstDocText?: string;
  firstUrl?: LooseObject;

  secondDocImg?: LooseObject;
  secondDocText?: string;
  secondUrl?: LooseObject;
}

export interface SpecialCarouselProps {
  data: {
    slides: Slide[];
  };
}

const SpecialCarousel = (props: SpecialCarouselProps) => (
  <List data={props.data.slides || []}>
    {({ data: slides }) => {

      const arrayOfSlides = (slides && slides.map((slide, i) => (
        <div key={i}>
          <div 
            className={'specialCarousel'}
            style={{ backgroundImage: slide.image && `url(${getImageUrl(slide.image)})` }}
          >
            <div className={`specialCarousel__content`}>
              <div className="container">
                {slide.title && 
                  <h2 
                    style={slide.isBackgroundBlack ? {color: 'white'} : {}}
                  >
                    {slide.title}
                  </h2>
                }

                <div className="row">
                  <div className="specialCarousel__content__info col-12 col-md-8 col-lg-8 col-xl-6">
                    {slide.subTitle &&
                      <h3 style={slide.isBackgroundBlack ? {color: 'white'} : {}}>
                        <span style={{ color: '#e50000' }}>{`0${i + 1}. `}</span>{slide.subTitle}
                      </h3>}
                    {slide.description &&
                      <div className="specialCarousel__content__info__description">
                        {slide.description && <ReactMarkdown source={slide.description} />}
                      </div>}

                    <div className={'specialCarousel__content__downloads'}>
                      <div className={'specialCarousel__content__downloads__item'}>
                        <Link {...slide.firstUrl}>
                          <Media type={'image'} data={slide.firstDocImg} />
                        </Link>
                        {slide.firstUrl && <p>{slide.firstDocText}</p>}
                      </div>
                      <div className={'specialCarousel__content__downloads__item'}>
                        <Link {...slide.secondUrl}>
                          <Media type={'image'} data={slide.secondDocImg} />
                        </Link>
                        {slide.secondUrl && <p>{slide.secondDocText}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="specialCarousel__content__info col-12 col-md-4 col-lg-4 col-xl-6">
                    <div style={{ display: 'table', height: '100%', width: '100%' }}>
                      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                        <Media type={'image'} data={slide.productImg} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))) || [];
    
      var settings = {
        speed: 1000,
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow classes={'carousel--nextArrow'} />,
        prevArrow: <PrevArrow classes={'carousel--prevArrow'} />
      };

      return <Slider {...settings}>{arrayOfSlides}</Slider>;
    }}
  </List>
);

export default SpecialCarousel;