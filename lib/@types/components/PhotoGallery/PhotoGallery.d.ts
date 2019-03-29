import React from 'react';
export interface PhotoGalleryState {
    currentImage: number;
    numberOfPage: number;
    lightboxIsOpen: boolean;
    imageUrls: Array<string>;
}
interface Image {
    img: LooseObject;
}
export interface PhotoGalleryProps {
    data: {
        title: string;
        description: string;
        divider: boolean;
        images: Image[];
    };
}
declare class PhotoGallery extends React.Component<PhotoGalleryProps, PhotoGalleryState> {
    constructor(props: PhotoGalleryProps);
    renderGallery: (data: any) => JSX.Element;
    getImageUrls: () => any[];
    openLightbox: (index: number, event: any) => void;
    closeLightbox: () => void;
    gotoPrevious: () => void;
    gotoNext: () => void;
    gotoImage: (index: number) => void;
    handleClickImage: () => void;
    render(): JSX.Element;
}
export default PhotoGallery;
