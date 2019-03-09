import React, { MouseEventHandler } from 'react';

export interface LeftArrowProps {
  goToPrevSlide: MouseEventHandler;
}

const LeftArrow = (props: LeftArrowProps) => (
  <div className="slider__backArrow slider__arrow" onClick={props.goToPrevSlide}>
    <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
  </div>
);

export default LeftArrow;