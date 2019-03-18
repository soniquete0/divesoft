import React from 'react';
interface FaqItemState {
    show: boolean;
}
interface FaqItemProps {
    title: string;
    text: string;
}
declare class FaqItem extends React.Component<FaqItemProps, FaqItemState> {
    constructor(props: FaqItemProps);
    render(): JSX.Element;
}
export default FaqItem;
