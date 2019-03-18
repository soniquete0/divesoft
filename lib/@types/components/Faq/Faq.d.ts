/// <reference types="react" />
interface Question {
    title: string;
    text: string;
}
export interface FaqProps {
    data: {
        title: string;
        text: string;
        paddingTop: boolean;
        questions: Question[];
    };
}
declare const Faq: (props: FaqProps) => JSX.Element;
export default Faq;
