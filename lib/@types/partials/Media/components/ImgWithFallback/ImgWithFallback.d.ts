import * as React from 'react';
export interface ImgWithFallbackProps {
    alt?: string;
    originalSrc?: string;
    baseUrl: string;
    class?: string;
    hash: string;
    recommendedSizes: LooseObject;
    originalData: LooseObject;
}
export interface ImgWithFallbackState {
    src: string;
    loading: boolean;
}
declare class ImgWithFallback extends React.Component<ImgWithFallbackProps, ImgWithFallbackState> {
    constructor(props: ImgWithFallbackProps);
    createVariantIfDoesNotExist: () => void;
    getSizedUrl: (props: any) => void;
    loadImg(src: any): void;
    componentDidMount(): void;
    componentWillUpdate(nextProps: ImgWithFallbackProps, nextState: ImgWithFallbackState): void;
    handleError: () => void;
    render(): JSX.Element;
}
export default ImgWithFallback;
