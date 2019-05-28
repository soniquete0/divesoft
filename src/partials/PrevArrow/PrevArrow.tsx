import * as React from 'react';
import { MouseEventHandler } from 'react';

interface PrevArrowProps {
  style?: object;
  className?: string;
  onClick?: MouseEventHandler;
}

export default function PrevArrow(props: PrevArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div 
      onClick={onClick} 
      style={{ ...style }} 
      className={`${className} prevArrow`}
    >
      <div className="prevArrow--top" />
      <div className="prevArrow--bottom" />
    </div>
  );
}