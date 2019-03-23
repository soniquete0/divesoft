import React from 'react';
export interface SpecialCarouselState {
    slides: any;
}
interface Slide {
    image: LooseObject;
    title?: string;
    subTitle?: string;
    description?: string;
    productImg?: LooseObject;
    isBackgroundBlack?: boolean;
    firstDocImg?: LooseObject;
    firstDocText?: string;
    firstUrl?: LooseObject;
    secondDocImg?: LooseObject;
    secondDocText?: string;
    secondUrl?: LooseObject;
}
export interface SpecialCarouselProps {
    data: {
        slides: Slide[];
    };
}
declare class SpecialCarousel extends React.Component<SpecialCarouselProps, SpecialCarouselState> {
    constructor(props: SpecialCarouselProps);
    componentWillReceiveProps: (nextProps: any) => void;
    renderSlides(data: any): any[];
    render(): JSX.Element;
}
export default SpecialCarousel;
