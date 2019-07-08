import * as React from 'react';
import Slider from 'react-slick';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

interface Component {
  title: string;
  description: string;
  image: LooseObject;
  url: LooseObject;
}

export interface ProductComponentsProps {
  data: {
    title: string;
    description: string;
    components: Component[];
  };
}

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProductComponents = (props: ProductComponentsProps) => {
  const { title, description, components } = props.data;

  return (
    <List data={components || []}>
        {({ data: slides }) => {
          console.log('slajdy', slides);
          const arrayOfMobileSlides = (slides && slides.map((slide, i) => (
            <div key={i}>
              <div className={'productComponents__mobileItem'}>
                <Media type={'image'} data={slide.image} />
                {slide.title && <h5>{slide.title}</h5>}
                {slide.description && <p>{slide.description}</p>}
                <Link {...slide.url}>More information</Link>
              </div>
            </div>
          ))) || [];

          var settings = {
            speed: 1000,
            dots: false,
            arrows: true,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
          };

          return (
            <div className={'productComponents'}>
              <div className="container">
                {title && <h2>{title}</h2>}
                {description && <p className={'textDescription'}>{description}</p>}

                <Default>
                  <div className={'productComponents__list row'}>
                    {slides && slides.map((item, i) => (
                      <div key={i} className="col-12 col-md-12 col-lg-6">
                        <div className={'productComponents__list__item'}>
                          <Media type={'image'} data={item.image} width="130" height="130"/>
                          <div className={'productComponents__list__item__content'}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <Link {...item.url}>More information</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Default>

                <Mobile>
                  <Slider {...settings}>{arrayOfMobileSlides}</Slider>
                </Mobile>
              </div>
            </div>
          );
        }}
    </List>
  );
};

export default ProductComponents;
