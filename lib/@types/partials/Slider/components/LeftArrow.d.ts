import { MouseEventHandler } from 'react';
export interface LeftArrowProps {
    goToPrevSlide: MouseEventHandler;
}
declare const LeftArrow: (props: LeftArrowProps) => JSX.Element;
export default LeftArrow;
