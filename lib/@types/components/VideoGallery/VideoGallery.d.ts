import React from 'react';
export interface VideoGalleryState {
    showMore: boolean;
}
interface Video {
    video: LooseObject;
    title: string;
    text: string;
}
export interface VideoGalleryProps {
    data: {
        title: string;
        description: string;
        divider: boolean;
        videos: Video[];
    };
}
declare class VideoGallery extends React.Component<VideoGalleryProps, VideoGalleryState> {
    constructor(props: VideoGalleryProps);
    render(): JSX.Element;
}
export default VideoGallery;
