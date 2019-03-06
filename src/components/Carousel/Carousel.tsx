import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Button from '@source/partials/Button';
import Media from '@source/partials/Media';
import List from '../List';

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
  currentIndex: number;
  itemsInSlide: number;
  // tslint:disable-next-line:no-any
  galleryItems: any;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.state = {
      currentIndex: 0,
      itemsInSlide: 1,
      galleryItems: this.galleryItems(),
    };
  }  

   slideTo = (i) => {
    this.setState({ currentIndex: i });
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
                      style={slide.isCentred ? {maxWidth: '100%'} : {}}
                    >
                      <Button 
                        classes={`${slide.isBackgroundBlack ? '' : 'btn--bordered'} 
                              ${slide.isCentred ? 'btn--center' : ''}`} 
                        url={slide.url && slide.url.url}
                      >
                        {slide.buttonTitle}
                      </Button>
                    </div>}
                </div>
              </div>
              <Media key={i} type={'image'} data={slide.image} />
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
        {({ data }) => (
          <div className={'carousel'}>
            <div className={'carousel__images'}>
              <AliceCarousel 
                autoPlay={true}
                dotsDisabled={false}
                buttonsDisabled={true}
                autoPlayInterval={10000}
                items={this.state.galleryItems}
                onSlideChanged={(e) => {
                  this.setState({ currentIndex: e.item }); 
                }}
                slideToIndex={this.state.currentIndex}
              />
            </div>
          </div>    
        )}
      </List>
    );
  }
}

export default Carousel;
