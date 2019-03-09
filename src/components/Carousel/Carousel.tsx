import * as React from 'react';

import Button from '@source/partials/Button';
import Slider from '@source/partials/Slider';
import Media from '@source/partials/Media';
import List from '../List';
import { throws } from 'assert';

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

export interface CarouselState {
  // tslint:disable-next-line:no-any
  galleryItems: any;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      galleryItems: this.galleryItems(),
    };
  }  

   galleryItems() {  
    const { slides } = this.props.data;
    let images = [];

    if (slides) {
      slides.map((slide, i) => {
        if (slide.image) {
          images.push
          (
            <div className={'carousel__images__img'}>
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
                  {slide.description && <p>{slide.description}</p>}
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
              <Media key={i} type={'image'} data={slide.image}/>
            </div>
          );
        }
      });
    }
    return images;
  }

   public render() {
    const { slides } = this.props.data;

    return (
      <List data={slides}>
        {({ data }) => 
          <Slider slides={this.state.galleryItems} autoplay={true} delay={10000} showArrows={false} showDots={true}/>}
      </List>
    );
  }
}

export default Carousel;
