import React from 'react';

import Dots from './components/Dots';
import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

export interface SliderProps {
  delay: number;
  autoplay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  wrapperClasses?: string;
  isFullWidth?: boolean;
  // tslint:disable-next-line:no-any
  slides: Array<any>;
}
export interface SliderState {
  // tslint:disable-next-line:no-any
  interval: any;
  // tslint:disable-next-line:no-any
  slides: Array<any>;
  currentIndex: number;
  translateValue: number;
}

class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);

    this.state = {
      slides: this.props.slides,
      interval: null,
      currentIndex: 0,
      translateValue: 0
    };
  }
  
  componentDidMount () {
    const { autoplay, delay } = this.props;

    if (autoplay) {
      let interval = setInterval(this.goToNextSlide, delay);
      this.setState({ interval });
    }
  }

  componentWillReceiveProps = (nextProps) => this.setState({ slides: nextProps.slides });

  componentWillUnmount = () => clearInterval(this.state.interval);

  goToNextSlide = () => {
    clearInterval(this.state.interval);

    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        interval: setInterval(this.goToNextSlide, this.props.delay)
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth()),
      interval: setInterval(this.goToNextSlide, this.props.delay)
    }));
  }

  goToPrevSlide = () => {
    clearInterval(this.state.interval);

    if (this.state.currentIndex === 0) { 
      return this.setState({
        currentIndex: this.state.slides.length,
        translateValue: this.state.slides.length * -(this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.props.delay)
      });
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
      interval: setInterval(this.goToNextSlide, this.props.delay)
    }));
  }

  goTo = (index) => {
    if (index === this.state.currentIndex) { return; }

    clearInterval(this.state.interval);
    
    if (index > this.state.currentIndex) {
      this.setState({
        currentIndex: index,
        translateValue: index * -(this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.props.delay)
      });
    } else {
      this.setState({
        currentIndex: index,
        translateValue: this.state.translateValue + (this.state.currentIndex - index) * (this.slideWidth()),
        interval: setInterval(this.goToNextSlide, this.props.delay)
      });
    }
  }

  slideWidth = () => {
    if (document.querySelector('.slider__slide')) {
      if (this.props.isFullWidth === false) {
        const container = document.querySelector('.container');
        const style = getComputedStyle(container);

        // container width - padding-right/left
        return parseInt(style.maxWidth, 10) - 30;
      }
      
      return document.querySelector('.slider__slide').clientWidth;
    } else {
      return 0; // fix for backoffice
    }
  }

  render() {

    return (
      <div className={`slider ${this.props.wrapperClasses}`}>
        <div 
          className="slider__wrapper"
          style={{ 
            transform: `translateX(${this.state.translateValue}px)`, 
            transition: 'transform ease-out 0.25s'}}
        >  
            {
              this.state.slides.map((slide, i) => (
                <Slide key={i} slide={slide} />
              ))
            } 
        </div>

        {this.props.showArrows ? (
          <>
            <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
            <RightArrow goToNextSlide={this.goToNextSlide}/>
          </>
        ) : ''}
        
        {this.props.showDots ? 
          <Dots 
            goTo={this.goTo} 
            len={this.props.slides.length} 
            currentIndex={this.state.currentIndex}
          /> : ''
        }
        
      </div>
    );
  }
}

export default Slider;