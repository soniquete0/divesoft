import * as React from 'react';
import List from '../List';
import Link from '../../partials/Link';

export interface HeaderProps {
  data: {
    title: string;
    url: LooseObject;
    links: LooseObject;
  };
}

export interface HeaderState {
}

class ProductCrossRoad extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { data: { title, url, links } } = this.props;
    return (
      <section className="product-crossroad-wrapper">
        <div className="product-crossroad-container container">
          {title && <h1><Link {...url}>{title}</Link></h1>}
          <List data={links}>
            {({ data }) => {
              console.log();
              return (
                Array.isArray(data) && data.length > 0 && <ul className="product-crossroad-list">
                  {data.map((i: LooseObject) => (
                    <li className={`${i.highlight ? 'highlight' : ''}`}><Link {...i.url}>{i.title}</Link></li>
                  ))}
                </ul>
              );
            }}
          </List>
        </div>
      </section>
    );
  }
}

export default ProductCrossRoad;
