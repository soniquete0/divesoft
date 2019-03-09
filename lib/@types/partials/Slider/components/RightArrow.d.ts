import { MouseEventHandler } from 'react';
export interface RightArrowProps {
    goToNextSlide: MouseEventHandler;
}
declare const RightArrow: (props: RightArrowProps) => JSX.Element;
export default RightArrow;
