import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import Link from '../../partials/Link';

interface Article {
  title?: string;
  text: string;
  url?: LooseObject;
}

export interface FirmwaresProps {
  data: {
    title: string;
    divider: boolean;
    articles: Article[];
  };
}

const Firmwares = (props: FirmwaresProps) => {
  const { title, divider, articles } = props.data;

  return (
    <List data={articles}>
      {({ data }) => (
        <div className={'firmwares'}>
          <div className={'container'}>

            <h2>{title}</h2>
            {data && data.map((item, i) => (
              <div key={i} className={'firmwares__item'}>
                {item.title && <h4>{item.title}</h4>}
                <ReactMarkdown source={item.text} />
                {item.url && <Link {...item.url}>Download</Link>}
              </div>
            ))}

            {divider ? <div className={'firmwares__divider'} /> : ''}
          </div>
        </div>
      )}
    </List>
  );
};

export default Firmwares;
