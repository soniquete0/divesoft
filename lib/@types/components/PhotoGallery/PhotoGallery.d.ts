import React from 'react';
export interface PhotoGalleryState {
    showMore: boolean;
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
    render(): JSX.Element;
}
export default PhotoGallery;
