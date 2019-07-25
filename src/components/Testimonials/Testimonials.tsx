import * as React from 'react';
import Slider from 'react-slick';

import List from '../List';
import Media from '../../partials/Media';

interface Testimonial {
  img: LooseObject;
  title: string;
  from: string;
  text: string;
}

export interface TestimonialsProps {
  data: {
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}

const Testimonials = (props: TestimonialsProps) => {
  const { title, description, testimonials } = props.data;

  return (
    <List data={testimonials || []}>
      {({ data: slides }) => {

        const arrayOfSlides = (slides && slides.map((slide, i) => (
          <div key={i}>
            <div className={'testimonials__list__item'}>
              {slide.img && <Media type={'image'} data={slide.img} />}
              {slide.title && <h4>{slide.title}</h4>}
              {slide.from && <span>{slide.from}</span>}
              {slide.text && <p>{slide.text}</p>}
            </div>
          </div>
        ))) || [];

        var settings = {
          speed: 1000,
          dots: false,
          arrows: true,
          autoplay: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1 }
            }
          ]
        };

        return (
          <div className={'testimonials'}>
            <div className="container">
              {title && <h2>{title}</h2>}
              {description && <p className={'testimonials__description textDescription'}>{description}</p>}

              <div className={'testimonials__list'}>
                <Slider {...settings}>
                  {arrayOfSlides}
                </Slider>
              </div>
            </div>
          </div>
        );
      }}
    </List>
  );
};

export default Testimonials;
