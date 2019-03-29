import React from 'react';
interface Image {
    image: LooseObject;
}
export interface GalleryAndVideoProps {
    data: {
        title: string;
        video: LooseObject;
        images: Image[];
    };
}
export interface GalleryAndVideoState {
    showMore: boolean;
    currentImage: number;
    numberOfPage: number;
    lightboxIsOpen: boolean;
    imageUrls: Array<string>;
}
declare class GalleryAndVideo extends React.Component<GalleryAndVideoProps, GalleryAndVideoState> {
    constructor(props: GalleryAndVideoProps);
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
export default GalleryAndVideo;
