import React from 'react';

import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

interface Product {
  title: string;
  description: string;
  image: LooseObject;
  url: LooseObject;
  isBkgDark: boolean;
}

export interface ProductsMenuProps {
  data: {
    title: string;
    subTitle: string;
    products: Product[];
  };
}

const ProductsMenu = (props: ProductsMenuProps) => {
  const { title, subTitle, products } = props.data;

  return (
    <div className={'product-previews'}>
      <div className="container">
        <div className={'product-previews__top'}>
          {title && <h3>{title}</h3>}
          {subTitle && <p className={'textDescription'}>{subTitle}</p>}
        </div>
        <div className={'product-preview__list row'}>
          <div className="col">
            {products.length >= 1 && products[0] && 
              <div 
                key={'1'}
                className={'product-previews__item'}
                style={products[0].image ? 
                      { backgroundImage: `url(${getImageUrl(products[0].image)})`} : {}}
              >
                <div className={'product-previews__item__content'}>
                  {products[0].description && <p 
                    className={'product-previews__item__description'} 
                    style={products[0].isBkgDark ? {color: 'white'} : {}}
                  >
                    {products[0].description}
                  </p>}
                  <div className={'product-previews__item__divider'} />
                  {products[0].title && 
                    <h2 
                      className={'product-previews__item__title'}
                      style={products[0].isBkgDark ? {color: 'white'} : {}}
                    >
                      {products[0].title}
                    </h2>}
                  <Button url={products[0].url}>More</Button>
                </div>
              </div>
            }
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                {products.length >= 2 && products[1] && 
                  <div 
                    key={'2'}
                    className={'product-previews__item product-previews__item--small'}
                    style={products[1].image ? 
                          { backgroundImage: `url(${getImageUrl(products[1].image)})`} : {}}
                  >
                    <div className={'product-previews__item__content'}>
                      {products[1].description && 
                        <p 
                          className={'product-previews__item__description'} 
                          style={products[1].isBkgDark ? {color: 'white'} : {}}
                        >
                          {products[1].description}
                        </p>}
                      <div className={'product-previews__item__divider'} />
                      {products[1].title && 
                        <h4 
                          className={'product-previews__item__title'} 
                          style={products[1].isBkgDark ? {color: 'white'} : {}}
                        >
                          {products[1].title}
                        </h4>}
                      <Button url={products[1].url}>More</Button>
                    </div>
                  </div>
                }
              </div>
              <div className="col">
                {products.length >= 3 && products[2] && 
                  <div 
                    key={'3'}
                    className={'product-previews__item product-previews__item--small'}
                    style={products[2].image ? 
                          { backgroundImage: `url(${getImageUrl(products[2].image)})`} : {}}
                  >
                    <div className={'product-previews__item__content'}>
                      {products[2].description && <p 
                        className={'product-previews__item__description'} 
                        style={products[2].isBkgDark ? {color: 'white'} : {}}
                      >
                        {products[2].description}
                      </p>}
                      <div className={'product-previews__item__divider'} />
                      {products[2].title && 
                        <h4 
                          className={'product-previews__item__title'}
                          style={products[2].isBkgDark ? {color: 'white'} : {}}
                        >
                          {products[2].title}
                        </h4>}
                        <Button url={products[2].url}>More</Button>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="row">
              {products.length >= 4 && products[3] && 
                <div 
                  key={'4'}
                  className={'product-previews__item product-previews__item--small'}
                  style={products[3].image ? 
                        { backgroundImage: `url(${getImageUrl(products[3].image)})`} : {}}
                >
                  <div className={'product-previews__item__content'}>
                    {products[1].description && <p 
                      className={'product-previews__item__description'} 
                      style={products[3].isBkgDark ? {color: 'white'} : {}}
                    >
                      {products[3].description}
                    </p>}
                    <div className={'product-previews__item__divider'} />
                    {products[3].title && 
                      <h4 
                        className={'product-previews__item__title'}
                        style={products[3].isBkgDark ? {color: 'white'} : {}}
                      >
                        {products[3].title}
                      </h4>}
                    <Button url={products[3].url}>More</Button>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMenu;