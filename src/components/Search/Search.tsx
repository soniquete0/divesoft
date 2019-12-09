import * as React from 'react';
import SearchResults from '../SearchResults';

export interface SearchState {
  searchFocus: boolean;
  searchQuery: string;
  value: string;
}

export interface SearchProps {
  language?: string;
  handleSearchShow: any;
}

class Search extends React.Component<SearchProps, SearchState> {
  public searchInput: any;
  public searchComponentRef: any;

  constructor(props: SearchProps) {
    super(props);
    this.searchInput = React.createRef();
    this.searchComponentRef = React.createRef();
    this.unFocusSearch = this.unFocusSearch.bind(this);
    this.handleEscKey = this.handleEscKey.bind(this);
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

  handleEscKey(e) {
    if (e.keyCode === 27) {
      console.log('hahah');
      return this.props.handleSearchShow();
    }
  }

  componentDidMount() {
    this.searchInput.current.focus();
    this.searchComponentRef.addEventListener('keydown', this.handleEscKey);
  }

  componentWillUnmount() {
    this.searchComponentRef.removeEventListener('keydown', this.handleEscKey);
  }

  render() {
    const { searchFocus, value, searchQuery } = this.state;

    return (
      <>
        <div className={'search'} ref={ref => this.searchComponentRef = ref}>
          <div className="container">
            <div className="search-input-wrapper">
              <img src="/assets/divesoft/images/search.svg" className="search-input-image" />
              <input
                className="search-input"
                type="text"
                placeholder={'search'}
                ref={this.searchInput}
                onFocus={() => this.focusSearch()}
                onBlur={() => setTimeout(() => this.unFocusSearch(), 300)}
                onChange={e => this.handleChange(e.target.value)}
                defaultValue={''}
              />
              <button className="search-close" onClick={this.props.handleSearchShow}>
                <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 47.971 47.971">
                  <g>
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                  </g>
                </svg>
              </button>
            </div>
            {searchFocus 
              && searchQuery 
              && searchQuery.length > 2 
              && <SearchResults
                    searchQuery={searchQuery}
                    active={searchQuery && searchQuery.length > 2}
                    handleSearch={this.handleChange}
                    languageCode={this.props.language}
                    handleSearchShow={this.props.handleSearchShow}
              />}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
