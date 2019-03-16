/// <reference types="react" />
export interface NewsProps {
    data: {
        title?: string;
        shareUrl?: LooseObject;
        firstText: string;
        firstImg?: LooseObject;
        secondText?: string;
        secondImg?: LooseObject;
        thirdImg?: LooseObject;
        thirdText?: string;
        buttonUrl?: LooseObject;
    };
}
declare const News: (props: NewsProps) => JSX.Element;
export default News;
