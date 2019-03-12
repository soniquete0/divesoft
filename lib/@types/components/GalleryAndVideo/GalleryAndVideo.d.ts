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
}
declare class GalleryAndVideo extends React.Component<GalleryAndVideoProps, GalleryAndVideoState> {
    constructor(props: GalleryAndVideoProps);
    render(): JSX.Element;
}
export default GalleryAndVideo;
