import React from 'react';
export interface ContactRowState {
    showMore: boolean;
}
interface Contact {
    name: string;
    position: string;
    url: LooseObject;
    urlTitle: string;
    email: string;
    phone: string;
}
export interface ContactRowProps {
    data: {
        title: string;
        contacts: Contact[];
    };
}
declare class ContactRow extends React.Component<ContactRowProps, ContactRowState> {
    constructor(props: ContactRowProps);
    render(): JSX.Element;
}
export default ContactRow;
