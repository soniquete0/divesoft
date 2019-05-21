import * as React from 'react';

import List from '../List';
import Media from '../../partials/Media';
import Button from '../../partials/Button';
import Slider from '../../partials/Slider';

interface Slide {
  image: LooseObject;
  url?: LooseObject;
  title?: string;
  subTitle?: string;
  description?: string;
  buttonTitle?: string;
  isBackgroundBlack: boolean;
  isCentred: boolean;
}

export interface CarouselProps {
  data: {
    slides: Slide[];
  };
}

export interface CarouselState {}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {};
  }

  renderSlides(data: any) {
    if (data.length < 1) { return; }
    let result = [];

    data.map((slide, i) => {
      result.push(
        <div key={i} className={'carousel__images__img'}>
          <div className={'container'}>
            <div className={`carousel__images__img__content ${slide.isCentred ? 'center' : ''}`}>
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
                  className={'carousel__images__img__content__btnHolder'}
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
          {slide.image && <Media type={'image'} data={slide.image}/>}
        </div>);
    });

    return result;
  }

  public render() {
    const { slides } = this.props.data;

    return (
      <List data={slides}>
        {({ data }) =>
          <Slider
            delay={10000}
            slides={this.renderSlides(data)}
            wrapperClasses={'sliderAtTop'}
            autoplay={data.length <= 1 ? false : true}
            showDots={data.length <= 1 ? false : true}
            showArrows={data.length <= 1 ? false : true}
          />}
      </List>
    );
  }
}

export default Carousel;
