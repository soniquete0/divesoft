/// <reference types="react" />
interface Article {
    title?: string;
    text: string;
    url?: LooseObject;
}
export interface FirmwaresProps {
    data: {
        title: string;
        divider: boolean;
        articles: Article[];
    };
}
declare const Firmwares: (props: FirmwaresProps) => JSX.Element;
export default Firmwares;
