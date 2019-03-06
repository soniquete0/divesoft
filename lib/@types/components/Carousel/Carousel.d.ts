import * as React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
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
    currentIndex: number;
    itemsInSlide: number;
    galleryItems: any;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps);
    slideTo: (i: any) => void;
    galleryItems(): any[];
    render(): JSX.Element;
}
export default Carousel;
