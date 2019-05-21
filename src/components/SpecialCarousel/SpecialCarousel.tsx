import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import Slider from '../../partials/Slider';

export interface SpecialCarouselState {}

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

    this.state = {};
  }

  renderSlides(data: any) {
    if (data.length < 1) { return; }
    let result = [];

    data.map((slide, i) => {
      result.push(
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
                    <Media type={'image'} data={slide.productImg} />
                  </div>
                </div>
              </div>
            </div>

          <Media key={i} type={'image'} data={slide.image}/>
        </div>);
    });

    return result;
  }

  public render() {

    return (
      <List data={this.props.data.slides}>
        {({ data }) =>
          <Slider
            delay={10000}
            slides={this.renderSlides(data)}
            autoplay={this.props.data.slides.length <= 1 ? false : true}
            showDots={this.props.data.slides.length <= 1 ? false : true}
            showArrows={this.props.data.slides.length <= 1 ? false : true}
          />}
      </List>
    );
  }
}

export default SpecialCarousel;
