import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import Button from '../../partials/Button';
import NextArrow from '../../partials/NextArrow';
import PrevArrow from '../../partials/PrevArrow';
import getImageUrl from '../../helpers/getImageUrl';

interface Slide {
  image?: LooseObject;
  url?: LooseObject;
  title?: string;
  subTitle?: string;
  description?: string;
  buttonTitle?: string;
  isCentred: boolean;
  isBackgroundBlack: boolean;
}

export interface CarouselProps {
  data: {
    slides: Slide[];
  };
}

const Carousel = (props: CarouselProps) => (
  <List data={props.data.slides || []}>
    {({ data: slides }) => {

      const arrayOfSlides = (slides && slides.map((slide, i) => (
        <div key={i}>
          <div 
            className={'carousel'} 
            style={{ backgroundImage: slide.image && `url(${getImageUrl(slide.image)})` }}
          >
            <div className={'container'} style={{ height: '100%' }}>
              <div className={'carousel__contentWrapper'}>
                <div className={`carousel__content ${slide.isCentred ? 'center' : ''}`}>
                  {slide.subTitle &&
                    <h2 style={slide.isBackgroundBlack ? {color: 'white'} : {}}>
                      {slide.subTitle}
                    </h2>}
                  {slide.title &&
                    <h1 style={slide.isBackgroundBlack ? {color: 'white'} : {}}>
                      {slide.title}
                    </h1>}
                  <p>{slide.description}</p>
                  {slide.buttonTitle &&
                    <div
                      className={'carousel__content__btnHolder'}
                      style={slide.isCentred ? {margin: '0 auto'} : {}}
                    >
                      <Button
                        classes={`${slide.isBackgroundBlack ? '' : 'btn--bordered'}
                                  ${slide.isCentred ? 'btn--center' : ''}`}
                        url={slide.url}
                      >
                        {slide.buttonTitle}
                      </Button>
                    </div>}
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

      return (
        <div className="sliderAtTop">
          <Slider {...settings}>{arrayOfSlides}</Slider>
        </div>
      );
    }}
  </List>
);

export default Carousel;