/// <reference types="react" />
interface Article {
    title?: string;
    text: string;
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
