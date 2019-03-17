import React from 'react';
export interface GalleryItemState {
    fullScreen: boolean;
}
export interface GalleryItemProps {
    image: LooseObject;
    wrapperClasses: string;
}
declare class GalleryItem extends React.Component<GalleryItemProps, GalleryItemState> {
    constructor(props: GalleryItemProps);
    render(): JSX.Element;
}
export default GalleryItem;
