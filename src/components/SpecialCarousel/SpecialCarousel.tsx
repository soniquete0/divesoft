import React from 'react';
import ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';

export interface SpecialCarouselState {
  // tslint:disable-next-line:no-any
  galleryItems: any;
}

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

class SpecialCarousel extends React.Component<SpecialCarouselProps, SpecialCarouselState> {
  constructor(props: SpecialCarouselProps) {
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
            <div key={i} className={'specialCarousel'}>

              <div className={`specialCarousel__content`}>
                <div className="container">
                  {slide.title && 
                    <h2 style={slide.isBackgroundBlack ? {color: 'white'} : {}}>
                      {slide.title}
                    </h2>}

                    <div className="row">
                      <div className="specialCarousel__content__info col-12 col-md-8 col-lg-8 col-xl-6">
                        {slide.subTitle && 
                          <h3 style={slide.isBackgroundBlack ? {color: 'white'} : {}}>
                            <span style={{ color: '#e50000' }}>{`0${i + 1}. `}</span>{slide.subTitle}
                          </h3>}
                        {slide.description && 
                          <p className="specialCarousel__content__info__description">
                            {slide.description && <ReactMarkdown source={slide.description} />}
                          </p>}

                        <div className={'specialCarousel__content__downloads'}>
                          <div className={'specialCarousel__content__downloads__item'}>
                            <Link url={slide.firstUrl && slide.firstUrl.url}>
                              <Media type={'image'} data={slide.firstDocImg} />
                            </Link>
                            {slide.firstDocText && <p>{slide.firstDocText}</p>}
                          </div>
                          <div className={'specialCarousel__content__downloads__item'}>
                            <Link url={slide.secondUrl && slide.secondUrl.url}>
                              <Media type={'image'} data={slide.secondDocImg} />
                            </Link>
                            {slide.secondDocText && <p>{slide.secondDocText}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="specialCarousel__content__info col-12 col-md-4 col-lg-4 col-xl-6">
                        <Media type={'image'} data={slide.productImg} />
                      </div>
                    </div>
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

    return (
      <List data={this.state.galleryItems}>
        {({ data }) => 
          <Slider 
            delay={10000}
            slides={data}
            autoplay={this.state.galleryItems.length <= 1 ? false : true} 
            showDots={this.state.galleryItems.length <= 1 ? false : true}
            showArrows={this.state.galleryItems.length <= 1 ? false : true} 
          />}
      </List>
    );
  }
}

export default SpecialCarousel;
