import * as React from 'react';
export interface MediaProps {
    type: string;
    data: any;
    class?: string;
}
export interface MediaState {
}
declare class Media extends React.Component<MediaProps, MediaState> {
    constructor(props: MediaProps);
    renderAsImage: (data: any) => JSX.Element;
    renderAsVideoEmbed(data: any): JSX.Element;
    render(): JSX.Element;
}
export default Media;
