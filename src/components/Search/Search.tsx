import * as React from 'react';
import SearchResults from '../SearchResults';

export interface SearchState {
  searchFocus: boolean;
  searchQuery: string;
  value: string;
}

export interface SearchProps {
  language?: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  public searchInput: any;

  constructor(props: SearchProps) {
    super(props);
    this.searchInput = React.createRef();
    this.unFocusSearch = this.unFocusSearch.bind(this);
    this.state = {
      searchFocus: false,
      searchQuery: '',
      value: ''
    };
  }

  handleChange = (value: string) => {
    this.setState({
      searchQuery: value,
    });
  }

  unFocusSearch = () => {
    setTimeout(
      () => {
        this.setState({
          searchFocus: false,
        });
        console.log('unfocus search')
      },
      10
    );
  }

  focusSearch = () => {
    this.searchInput.current.focus();

    this.setState({
      searchFocus: true,
    });
  }

  render() {
    const { searchFocus, value, searchQuery } = this.state;

    return (
      <>
        <div className={'search'}>
          <div className="container">
            <input
              type="text"
              placeholder={'search'}
              ref={this.searchInput}
              onFocus={() => this.focusSearch()}
              onBlur={() => setTimeout(() => this.unFocusSearch(), 300)}
              onChange={e => this.handleChange(e.target.value)}
              defaultValue={''}
            />
          </div>
        </div>

        {searchFocus && searchQuery && searchQuery.length > 2 && <SearchResults
          searchQuery={searchQuery}
          active={searchQuery && searchQuery.length > 2}
          handleSearch={this.handleChange}
          languageCode={this.props.language}
        />}
      </>
    );
  }
}

export default Search;
