import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

interface ProductPreview {
  title: string;
  description: string;
  image: LooseObject;
  url: LooseObject;
  isBkgDark: boolean;
}

export interface ProductPreviewsProps {
  data: {
    title: string;
    subTitle: string;
    productPreviews: ProductPreview[];
  };
}

const ProductPreviews = (props: ProductPreviewsProps) => {
  const { title, subTitle, productPreviews } = props.data;

  return (
    <div className={'product-previews'}>
      <div className="container">
        <div className={'product-previews__top'}>
          {title && <h3>{title}</h3>}
          {subTitle && <p>{subTitle}</p>}
        </div>
        <div className={'product-preview__list row'}>
          <div className="col">
            {productPreviews.length >= 1 && productPreviews[0] && 
              <div 
                key={'1'}
                className={'product-previews__item'}
                style={productPreviews[0].image ? 
                      { backgroundImage: `url(${getImageUrl(productPreviews[0].image)})`} : {}}
              >
                <div className={'product-previews__item__content'}>
                  {productPreviews[0].description && <p 
                    className={'product-previews__item__description'} 
                    style={productPreviews[0].isBkgDark ? {color: 'white'} : {}}
                  >
                    {productPreviews[0].description}
                  </p>}
                  <div className={'product-previews__item__divider'} />
                  {productPreviews[0].title && 
                    <h2 
                      className={'product-previews__item__title'}
                      style={productPreviews[0].isBkgDark ? {color: 'white'} : {}}
                    >
                      {productPreviews[0].title}
                    </h2>}
                  <Button url={productPreviews[0].url}>More</Button>
                </div>
              </div>
            }
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                {productPreviews.length >= 2 && productPreviews[1] && 
                  <div 
                    key={'2'}
                    className={'product-previews__item product-previews__item--small'}
                    style={productPreviews[1].image ? 
                          { backgroundImage: `url(${getImageUrl(productPreviews[1].image)})`} : {}}
                  >
                    <div className={'product-previews__item__content'}>
                      {productPreviews[1].description && 
                        <p 
                          className={'product-previews__item__description'} 
                          style={productPreviews[1].isBkgDark ? {color: 'white'} : {}}
                        >
                          {productPreviews[1].description}
                        </p>}
                      <div className={'product-previews__item__divider'} />
                      {productPreviews[1].title && 
                        <h4 
                          className={'product-previews__item__title'} 
                          style={productPreviews[1].isBkgDark ? {color: 'white'} : {}}
                        >
                          {productPreviews[1].title}
                        </h4>}
                      <Button url={productPreviews[1].url}>More</Button>
                    </div>
                  </div>
                }
              </div>
              <div className="col">
                {productPreviews.length >= 3 && productPreviews[2] && 
                  <div 
                    key={'3'}
                    className={'product-previews__item product-previews__item--small'}
                    style={productPreviews[2].image ? 
                          { backgroundImage: `url(${getImageUrl(productPreviews[2].image)})`} : {}}
                  >
                    <div className={'product-previews__item__content'}>
                      {productPreviews[2].description && <p 
                        className={'product-previews__item__description'} 
                        style={productPreviews[2].isBkgDark ? {color: 'white'} : {}}
                      >
                        {productPreviews[2].description}
                      </p>}
                      <div className={'product-previews__item__divider'} />
                      {productPreviews[2].title && 
                        <h4 
                          className={'product-previews__item__title'}
                          style={productPreviews[2].isBkgDark ? {color: 'white'} : {}}
                        >
                          {productPreviews[2].title}
                        </h4>}
                        <Button url={productPreviews[2].url}>More</Button>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="row">
              {productPreviews.length >= 4 && productPreviews[3] && 
                <div 
                  key={'4'}
                  className={'product-previews__item product-previews__item--small'}
                  style={productPreviews[3].image ? 
                        { backgroundImage: `url(${getImageUrl(productPreviews[3].image)})`} : {}}
                >
                  <div className={'product-previews__item__content'}>
                    {productPreviews[1].description && <p 
                      className={'product-previews__item__description'} 
                      style={productPreviews[3].isBkgDark ? {color: 'white'} : {}}
                    >
                      {productPreviews[3].description}
                    </p>}
                    <div className={'product-previews__item__divider'} />
                    {productPreviews[3].title && 
                      <h4 
                        className={'product-previews__item__title'}
                        style={productPreviews[3].isBkgDark ? {color: 'white'} : {}}
                      >
                        {productPreviews[3].title}
                      </h4>}
                    <Button url={productPreviews[3].url}>More</Button>
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

export default ProductPreviews;