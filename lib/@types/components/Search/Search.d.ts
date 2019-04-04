import React from 'react';
export interface SearchState {
    searchFocus: boolean;
    searchQuery: string;
    value: string;
}
export interface SearchProps {
    language?: string;
}
declare class Search extends React.Component<SearchProps, SearchState> {
    searchInput: any;
    constructor(props: SearchProps);
    handleChange: (value: string) => void;
    unFocusSearch: () => void;
    focusSearch: () => void;
    render(): JSX.Element;
}
export default Search;
