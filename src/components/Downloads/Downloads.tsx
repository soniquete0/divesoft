import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

interface File {
  title: string;
  img?: LooseObject;
  url?: LooseObject;
  urlText: string;
}

export interface DownloadsProps {
  data: {
    title: string;
    description: string;
    files: File[];
  };
}

const Downloads = (props: DownloadsProps) => {
  const { title, description, files } = props.data;

  return (
    <div className={'downloads'}>
      <div className="container">
        {title && <h2 className={'downloads__title'}>{title}</h2>}
        {description && <p className={'textDescription'}>{description}</p>}
        <div className="downloads__list row">
          <List data={files}>
            {({ data }) => data.map((item, i) => (
              <div key={i} className={'col-12 col-md-4 downloads__list__item'}>
                <Media type={'image'} data={item.img} />
                {item.title && <h4>{item.title}</h4>}
                {item.url && item.urlText && <Link {...item.url}>{item.urlText}</Link>}
              </div>)
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
