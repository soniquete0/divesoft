/// <reference types="react" />
export interface SearchResultsProps {
    searchQuery: string;
    active: boolean;
    handleSearch: (value: string) => void;
    languageCode: string;
}
declare const SearchResults: (props: SearchResultsProps) => JSX.Element;
export default SearchResults;
