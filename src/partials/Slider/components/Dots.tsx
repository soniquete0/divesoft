import React from 'react';

export interface DotsProps {
  // tslint:disable-next-line:no-any
  goTo: any;
  len: number;
  currentIndex: number;
}

const DotsProps = (props: DotsProps) => {
  if (props.len <= 0) { return; }

  let dots = [];
  for (let i = 0; i < props.len; i++) {
    dots.push(
      <i 
        key={i} 
        className={`slider__dots__dot ${props.currentIndex === i ? `slider__dots__dot--active` : '' }`} 
        onClick={() => props.goTo(i)}
      />);
  }

  return (
    <div className="slider__dots">
      {dots}
    </div>
  );
};

export default DotsProps;