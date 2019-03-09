import React from 'react';

export interface SlideProps {
  // tslint:disable-next-line:no-any
  slide: any;
}

const Slide = (props: SlideProps) => (
  <div className="slider__slide">
    {props.slide}
  </div>
);

export default Slide;