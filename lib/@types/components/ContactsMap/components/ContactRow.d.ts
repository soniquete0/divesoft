import React from 'react';
export interface ContactRowState {
    numberOfPage: number;
}
interface Contact {
    name: string;
    position: string;
    email: string;
    phone: string;
    web: LooseObject;
}
interface ContactRowProps {
    title: string;
    rows: Contact[];
}
declare class ContactRow extends React.Component<ContactRowProps, ContactRowState> {
    constructor(props: ContactRowProps);
    render(): JSX.Element;
}
export default ContactRow;
