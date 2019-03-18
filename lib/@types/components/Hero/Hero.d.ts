/// <reference types="react" />
export interface HeroProps {
    data: {
        title: string;
        text?: string;
        btnTitle?: string;
        url?: LooseObject;
        image?: LooseObject;
        paddingTop: boolean;
    };
}
declare const Hero: (props: HeroProps) => JSX.Element;
export default Hero;
