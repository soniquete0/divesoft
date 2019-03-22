import * as React from 'react';
interface Slide {
    image: LooseObject;
    url?: LooseObject;
    title?: string;
    subTitle?: string;
    description?: string;
    buttonTitle?: string;
    isBackgroundBlack: boolean;
    isCentred: boolean;
}
export interface CarouselProps {
    data: {
        slides: Slide[];
    };
}
export interface CarouselState {
    slides: any;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps);
    componentWillReceiveProps: (nextProps: any) => void;
    renderSlides(data: any): any[];
    render(): JSX.Element;
}
export default Carousel;
