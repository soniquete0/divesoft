import React from 'react';
import ReactMarkdown from 'react-markdown';

import List from '../List';

interface Article {
  title?: string;
  text: string;
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