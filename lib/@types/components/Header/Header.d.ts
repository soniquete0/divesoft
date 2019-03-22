import * as React from 'react';
export interface HeaderProps {
    navigations?: LooseObject;
    languages?: LooseObject;
    languageCode?: string;
}
export interface HeaderState {
    menuActive: boolean;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    closeMenu: () => void;
    toggleMenu: () => void;
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Header;
