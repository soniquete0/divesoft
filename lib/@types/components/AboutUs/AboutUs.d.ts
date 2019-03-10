import * as React from 'react';
export interface AboutUsState {
    hover: boolean;
}
export interface AboutUsProps {
    data: {
        leftTitle: string;
        leftSubtitle: string;
        leftText: string;
        leftUrl?: LooseObject;
        leftBtnTitle: string;
        leftImg?: LooseObject;
        rightTitle: string;
        rightSubtitle: string;
        rightText: string;
        rightUrl?: LooseObject;
        rightBtnTitle: string;
        rightImg?: LooseObject;
    };
}
declare class AboutUs extends React.Component<AboutUsProps, AboutUsState> {
    constructor(props: AboutUsProps);
    toggleHover: () => void;
    render(): JSX.Element;
}
export default AboutUs;
