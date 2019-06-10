
import Ajv from 'ajv';
import gql from 'graphql-tag';
import http from 'apollo-link-http';
import ca from 'apollo-cache-inmemory';
import dealers from './Dealers.json';
import fetch from 'node-fetch';
import urli from  'urlize';

import apollo from 'apollo-client';
import * as context from 'apollo-link-context';

const { ApolloClient } = apollo;
const { HttpLink } = http;
const { InMemoryCache } = ca;
const { urlize } = urli;

const cache = new InMemoryCache();

// console.log(ApolloClient);
const date = new Date();
console.log(date);
const httpLink = new HttpLink({ uri: 'http://divesoft.foxer360.com/api/graphql', fetch: fetch });

const GET_OUTDATED = gql`
  query datasourceItems($date: DateTime) {
    datasourceItems(where:{updatedAt_lt: $date}) {
      id
      slug
      createdAt
      updatedAt
    }
  }
`;

const authLink = context.default.setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  const bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UQTVRVVJDTlVWRk1ERXdPRE5HTlRBd1FqSTRORGd4TlRRMlFqTkJOMFF4TWtFM056YzNNUSJ9.eyJpc3MiOiJodHRwczovL2ZveGVyMzYwLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YzgxMTU0NTZkM2Q3MzJlNmFhOWQ2YjgiLCJhdWQiOlsiZm94ZXIzNjAtc2VydmVyIiwiaHR0cHM6Ly9mb3hlcjM2MC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTYwMTUzNTAxLCJleHAiOjE1NjAyMzk5MDEsImF6cCI6IkFEMjZwUzFyVG42ZEhjNkRPbVVoeFE5MDRPM2xHN2JzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.RI4nwF9Q3SFChGoImEkM-qjKmQMryVcoZ-a5taZQljZ-sKqd3GMc7sLVsOAvPHWVyKWBB73riLNbL9Sra8zClv354oYZyg-G5da_TMd98KeB4GEXKncpCaOUF9Vw75wKA-hStUc96Fn0B5T1GGYFbB5K5VjH02Pb76qqL8xEOIAFGigScnMf5mS1pci15Et8jNHfzPfEi-T4rgIMn_PnHkq5KAC0kRpgL0BzA-mCzBvT54-lZjij6PrP73Rljo_T7u9lLoCoqfOc9dX2w5tCqw_1YK-0k2GV2JVyrKRMJIkLW9i2X-VrSIC-Kwfi1bzRlSEEsPt3nsmH5XYs4ksOwQ';
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${bearer}`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
}); 

const ajv = new Ajv();

const DATASOURCE_ID = "cjvz50ved00aw0725ajwzwaa8"; /// Dealers

const DATASOURCE = gql`
  query datasource($id: ID!) {
    datasource(where: { id: $id }) {
      id
      type
      schema
      slug
      datasourceItems {
        id
        slug
        content
      }
    }
  }
`;

const CREATE_DATASOURCE_ITEM = gql`
  mutation createDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
    createDatasourceItem(
      data: {
        content: $content,
        slug: $slug,
        datasource: {
          connect: {
            id: $id
          }
        },
      }
    ) {
      id
      slug
      content
    }
  }
`;

const UPDATE_DATASOURCE_ITEM = gql`
  mutation updateDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
    updateDatasourceItem(
      data: {
        content: $content,
        slug: $slug
      },
      where: {
        id: $id
      }
    ) {
      id
      slug
      content
    }
  }
`;

const DELETE_DATASOURCE_ITEM = gql`
  mutation deleteDatasourceItem($id: ID!) {
    deleteDatasourceItem(where: { id: $id }) {
      id
    }
  }
`;

// tslint:disable-next-line:typedef
const createNewItem =  function (datasource, data) {
  const slug = urlize(datasource.slug
    .map(p => 
      p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
    )
    .join('-').toLowerCase());

  return client.mutate({
    mutation: CREATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug: slug,
      id: datasource.id,
    },
    // tslint:disable-next-line:no-shadowed-variable
    update: (cache, { data: { createDatasourceItem } }) => {
      datasource = { 
        ...datasource,
        datasourceItems: [
          ...datasource.datasourceItems,
          createDatasourceItem
        ]
      };
    }
  });
};

// tslint:disable-next-line:typedef
const updateItem = function (datasource, id, data) {
  const slug = urlize(datasource.slug
    .map(p => 
      p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
    )
    .join('-').toLowerCase());

  return client.mutate({
    mutation: UPDATE_DATASOURCE_ITEM,
    variables: {
      content: data,
      slug,
      id,
    },
    // tslint:disable-next-line:no-shadowed-variable
    update: (cache, { data: { updateDatasourceItem } }) => {
      datasource = { 
        ...datasource,
        datasourceItems: [
          ...datasource.datasourceItems.map((datasourceItem) => {
            if (datasourceItem.id === updateDatasourceItem.id) { return updateDatasourceItem; }
            return datasourceItem;
          }),
        ]
      };
    }
  });
};

// tslint:disable-next-line:typedef
const deleteItem = function (id) {
  return client.mutate({
    mutation: DELETE_DATASOURCE_ITEM,
    variables: {
      id,
    }
  });
};

  // tslint:disable-next-line:align
  const removeEmpty = (obj) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        removeEmpty(obj[key]);
      } else if (obj[key] == null) {
        delete obj[key];
      }
    });
  };
  // tslint:disable-next-line:align
  (async () => {

    const { data: { datasource }} = await client.query({ 
      query: DATASOURCE,
      variables: {
        id: DATASOURCE_ID
      }
    });

    try {
      return dealers.reduce((result, dealer) => {
        return result.then(
          (r) => {
            // const validate = ajv.compile(datasource.schema);
            const latlng = (dealer.latlng && dealer.latlng.split(',')) || ['-76.300003', '-148.000000'];
            const data = {
              ...dealer,
              lat: (latlng.length === 2 && parseFloat((latlng[0] && latlng[0].trim())) || -76.300003),
              lng: (latlng.length === 2 && parseFloat((latlng[1] && latlng[1].trim())) || -148.000000),
              isInstructor: dealer.instructor && dealer.instructor.toLowerCase() === 'yes',
              isServicePoint: dealer.technician && dealer.technician.toLowerCase() === 'yes',
            };
            

            console.log(data.name, data.lat, data.lng);
            // const valid = validate(transformedDoctor);
            const record = datasource.datasourceItems
              .find(item => item.content && (item.content.name === data.name));

            // tslint:disable-next-line:max-line-length
            if (!record) {
              return createNewItem(datasource, data)
                .then(() => setTimeout(() => Promise.resolve(), 2000));
            }
            return updateItem(datasource, record.id, data)
              .then(() => setTimeout(() => Promise.resolve(), 2000));

          }).catch((err) => { console.log(err); process.exit(); });
        // tslint:disable-next-line:align
        }, Promise.resolve())
        .then(() => {
          return client.query({
            query: GET_OUTDATED,
            variables: {
              date,
            }
          });
        })
        .then((outdated) => {
          if (outdated && outdated.data && outdated.data.datasourceItems) {

            return outdated.data.datasourceItems.reduce((result, item) => {
              return result.then(
                (r) => {
                  console.log(`Deleting ${item.slug}`);
                  return deleteItem(item.id)
                    .then(() => setTimeout(() => Promise.resolve(), 2000));
                }).catch((err) => { console.log(err); });
              // tslint:disable-next-line:align
              }, Promise.resolve());
          }
        }).catch((err) => console.error(err.result.errors));
        
    } catch (e) {
      console.log('insertion error', e);
    }
  })();
