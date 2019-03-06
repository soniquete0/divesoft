import * as React from 'react';
export interface FooterProps {
    data: {
        copyrights: string;
        facebookUrl: LooseObject;
        youtubeUrl: LooseObject;
        instagramUrl: LooseObject;
        contacts: string;
    };
}
export interface FooterState {
}
declare class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps);
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Footer;
