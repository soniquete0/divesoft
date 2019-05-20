import * as React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

export interface SearchResultsProps {
  searchQuery: string;
  active: boolean;
  handleSearch: (value: string) => void;
  languageCode: string;
}

const GET_CONTENT = gql`
  query($languageCode: String) {
    pages(where: { website: { id: "${process.env.REACT_APP_WEBSITE_ID}" }}) {
      id
      type {
        id
        name
      }
      tags {
        id
        name
      }
      translations(where: { language: { code: $languageCode } }) {
        id
        name
        content
        language {
          code
        }
      }
    }
    pagesUrls(where: { language: $language }) {
      id
      page
      url
      name
      description
    }
  }
`;
const GET_CONTEXT = gql`
{
  pageData @client
  languageData @client
}
`;

const GET_ALL_PAGES = gql`
  query pages($languageId: ID!) {
    pages {
      id
      type {
        id
        name
      }
      tags {
        id
        name
      }
      translations(where: { language: { id: $languageId } }) {
        id
        name
        createdAt
        content
        language {
          id
          code
        }
      }
    }
  }
`;

const GET_PAGE = gql`
  query($pageId: ID!) {
    page(where: { id: $pageId }) {
      id
      tags {
        id
        name
      }
    }
  }
`;

const GET_PAGES_URLS = gql`
  query pagesUrls($language: ID!) {
    pagesUrls(where: { language: $language }) {
      id
      page
      url
      name
      description
    }
  }
`;

const ComposedQuery = adopt({
  getContext: ({ render }) => (
    <Query query={GET_CONTEXT} >
      {({ data }) => render(data)}
    </Query>
  ),
  pagesUrls: ({ render, getContext: { languageData }}) => {
    if (!languageData) { return render({ loading: true }); }
    return (
    <Query query={GET_PAGES_URLS} variables={{ language: languageData.id }}>
      {(data) => {
        return render(data);
      }}
    </Query>);
  },
  allPages: ({ render, getContext: { languageData } }) => {
    if (!languageData) { return render({ loading: true }); }

    return (
    <div>
      <Query query={GET_ALL_PAGES} variables={{ languageId: languageData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    </div>);
  },
  currentPage: ({ render, getContext: { pageData } }) => (
    <Query query={GET_PAGE} variables={{ pageId: pageData.id }}>
      {data => {
        return render(data);
      }}
    </Query>
  ),
});

const SearchResults = (props: SearchResultsProps) => {
  const { active, searchQuery, handleSearch, languageCode } = props;

  return (
    <div className={`searchResults ${active ? 'searchResults--active ' : ''} `}>
      <ComposedQuery>
        {({
          pagesUrls: {
            data: pagesUrlsData,
            error: pagesUrlsError,
            loading: pagesUrlsLoading
          },
          allPages: {
            data: allPagesData,
            error: allPagesError,
            loading: allPagesLoading
          }
         }) => {
          if (pagesUrlsLoading || allPagesLoading) {
            return (
              <div className="searchResult__loading">
                Loading..
              </div>
            );
          }

          if (pagesUrlsError || allPagesError) {
            return <div className="searchResults__error">There was an error fetching results!.</div>;
          }

          const { pagesUrls } = pagesUrlsData;
          const { pages } = allPagesData;

          let filteredPages = (pages || [])
            .filter(page => {
              return JSON.stringify(page)
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            })
            .map(p => {
              let pageUrlObj = pagesUrls.find(pUrl => pUrl.page === p.id);

              return { ...p, ...(pageUrlObj ? { url: pageUrlObj.url } : {}) };
            });

          return (
            <div className={'searchResults__holder container'}>
              <h2 className="searchResults__holder__heading">Search Results:</h2>
              <ul>
                {filteredPages && filteredPages.length > 0 &&
                  filteredPages.map((page, index) => (
                    <li key={index}>
                      {page.url && (
                        <Link to={page.url} onClick={() => handleSearch('')}>
                          {page.translations[0].name}
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          );
        }}
      </ComposedQuery>
    </div>
  );
};

export default SearchResults;
