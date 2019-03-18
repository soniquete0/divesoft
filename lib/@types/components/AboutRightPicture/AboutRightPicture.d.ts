/// <reference types="react" />
export interface AboutRightPictureProps {
    data: {
        title: string;
        subtitle: string;
        text: string;
        img: LooseObject;
        paddingTop: boolean;
    };
}
declare const AboutRightPicture: (props: AboutRightPictureProps) => JSX.Element;
export default AboutRightPicture;
