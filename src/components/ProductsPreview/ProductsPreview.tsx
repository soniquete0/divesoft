import * as React from 'react';

import List from '../List';
import Media from '@source/partials/Media';
import Button from '@source/partials/Button';

interface Product {
  title: string;
  description: string;
  img: LooseObject;
  url: LooseObject;
}

export interface ProductsPreviewProps {
  data: {
    products: Product[];
  };
}

const ProductsPreview = (props: ProductsPreviewProps) => (
  <List data={props.data.products}>
      {({ data }) => (
        <div className={'productsPreview'}>
          <div className="container">
            <div className="row productsPreview__list">
              {data.map((item, i) => (
                <div key={i} className={'col-12 col-lg-6 col-xl-3'}>
                  <div className={'productsPreview__list__item'}>
                    <Media type={'image'} data={item.img} />
                    {item.title && <h5>{item.title}</h5>}
                    {item.description && <p>{item.description}</p>}
                    <Button url={item.url}>shop now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
  </List>
);

export default ProductsPreview;
