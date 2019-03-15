import React from 'react';

import Slide from './components/Slide';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';
import Dots from './components/Dots';

export interface SliderProps {
  delay?: number;
  autoplay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  class?: string;
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
      slides: [],
      interval: null,
      currentIndex: 0,
      translateValue: 0
    };
  }
  
  componentDidMount () {
    const { autoplay, delay } = this.props;
    this.setState({slides: this.props.slides});

    if (autoplay) {
      let interval = setInterval(this.goToNextSlide, delay);
      this.setState({ interval });
    }
  }

  componentWillUnmount = () => clearInterval(this.state.interval);

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) { 
      this.setState({
        currentIndex: this.state.slides.length,
        translateValue: this.state.slides.length * -(this.slideWidth())
      });
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  }

  goTo = (index) => {
    if (index === this.state.currentIndex) {
      return;
    }

    if (index > this.state.currentIndex) {
      this.setState({
        currentIndex: index,
        translateValue: index * -(this.slideWidth())
      });
    } else {
      this.setState({
        currentIndex: index,
        translateValue: this.state.translateValue + (this.state.currentIndex - index) * (this.slideWidth())
      });
    }
  }

  slideWidth = () => {
    if (document.querySelector('.slider__slide')) {
      return document.querySelector('.slider__slide').clientWidth;
    } else {
      return 0; // fix for backoffice
    }
  }

  render() {

    return (
      <div className={`slider ${this.props.class}`}>
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