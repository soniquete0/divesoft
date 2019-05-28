import * as React from 'react';
import { MouseEventHandler } from 'react';

interface NextArrowProps {
  style?: object;
  classes?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export default function NextArrow(props: NextArrowProps) {
  const { className, style, classes, onClick } = props;

  return (
    <div 
      onClick={onClick} 
      style={{ ...style }} 
      className={`${className} nextArrow ${classes}`}
    >
      <div className="nextArrow--top" />
      <div className="nextArrow--bottom" />
    </div>
  );
}