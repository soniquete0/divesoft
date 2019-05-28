import * as React from 'react';
import { MouseEventHandler } from 'react';

interface PrevArrowProps {
  style?: object;
  classes?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export default function PrevArrow(props: PrevArrowProps) {
  const { className, style, onClick, classes } = props;

  return (
    <div 
      onClick={onClick} 
      style={{ ...style }} 
      className={`${className} prevArrow ${classes}`}
    >
      <div className="prevArrow--top" />
      <div className="prevArrow--bottom" />
    </div>
  );
}