/// <reference types="react" />
export interface AboutLeftPictureProps {
    data: {
        title: string;
        subtitle: string;
        text: string;
        img: LooseObject;
        paddingTop: boolean;
    };
}
declare const AboutLeftPicture: (props: AboutLeftPictureProps) => JSX.Element;
export default AboutLeftPicture;
