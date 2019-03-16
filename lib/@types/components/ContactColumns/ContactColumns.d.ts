/// <reference types="react" />
export interface ContactColumnsProps {
    data: {
        firstTitle: string;
        firstAddress: string;
        firstEmail: string;
        firstAccounts: string;
        secondTitle: string;
        secondAddress: string;
        secondEmail: string;
        secondAccounts: string;
        bottomInfo: string;
    };
}
declare const ContactColumns: (props: ContactColumnsProps) => JSX.Element;
export default ContactColumns;
