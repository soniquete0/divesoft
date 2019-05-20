import * as React from 'react';
interface Product {
    title: string;
    description: string;
    img: LooseObject;
    url: LooseObject;
}
export interface HeaderProps {
    data: {
        products: Product[];
    };
    navigations?: LooseObject;
    languages?: LooseObject;
    languageCode?: string;
}
export interface HeaderState {
    menuActive: boolean;
    showDropdown: boolean;
    showSearch: boolean;
    searchQuery: string;
    visibleProductsSubMenu: boolean;
    subMenuVisible: string;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps);
    closeMenu: () => void;
    toggleMenu: () => void;
    toggleDropdown: () => void;
    hideSubMenu: () => void;
    submenuVisibility: (cat: any) => void;
    canToggle: (item: any) => any;
    render(): JSX.Element;
    private transformNavigationsIntoTree;
    private buildNavTree;
}
export default Header;
