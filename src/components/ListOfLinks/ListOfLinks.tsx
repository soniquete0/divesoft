import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';

interface Link {
  title: string;
  url: LooseObject;
}

export interface ListOfLinksProps {
  data: {
    links: Link[];
  };
}

const ListOfLinks = (props: ListOfLinksProps) => (
  <List data={props.data.links}>
    {({ data }) =>  (
      <div className={'listOfLinks'}>
        <div className="container">
          {data && data.map((item, i) => <Link key={i} {...item.url}>{item.title}</Link> )}
        </div>
      </div>
    )}
  </List>
);

export default ListOfLinks;
