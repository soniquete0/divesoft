import * as React from 'react';
import { MouseEventHandler } from 'react';

export interface RightArrowProps {
  goToNextSlide: MouseEventHandler;
}

const RightArrow = (props: RightArrowProps) => (
  <div className="slider__nextArrow slider__arrow" onClick={props.goToNextSlide}>
    <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
  </div>
);

export default RightArrow;
