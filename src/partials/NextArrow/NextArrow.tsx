import * as React from 'react';
import { MouseEventHandler } from 'react';

interface NextArrowProps {
  style?: object;
  className?: string;
  onClick?: MouseEventHandler;
}

export default function NextArrow(props: NextArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div 
      onClick={onClick} 
      style={{ ...style }} 
      className={`${className} nextArrow`}
    >
      <div className="nextArrow--top" />
      <div className="nextArrow--bottom" />
    </div>
  );
}