import React from 'react';
interface ServiceRowItemState {
    show: boolean;
}
interface ServiceRowItemProps {
    title: string;
    text?: string;
    address?: string;
    storeChief?: string;
    phone?: string;
    email?: string;
    web?: LooseObject;
}
declare class ServiceRowItem extends React.Component<ServiceRowItemProps, ServiceRowItemState> {
    constructor(props: ServiceRowItemProps);
    render(): JSX.Element;
}
export default ServiceRowItem;
