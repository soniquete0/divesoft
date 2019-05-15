import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import Slider from '@source/partials/Slider';

interface Component {
  title: string;
  description: string;
  image: LooseObject;
  url: LooseObject;
}

export interface ProductComponentsProps {
  data: {
    title: string;
    description: string;
    components: Component[];
  };
}

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProductComponents = (props: ProductComponentsProps) => {
  const { title, description, components } = props.data;

  const mobileViews = [];
  for (let i = 0; i < components.length; i++) {
    mobileViews.push(
      <div key={i} className={'productComponents__mobileItem'}>
        <Media type={'image'} data={components[i].image} />
        {components[i].title && <h5>{components[i].title}</h5>}
        {components[i].description && <p>{components[i].description}</p>}
        <Link {...components[i].url}>More information</Link>
      </div>
    );
  }

  return (
    <List data={components}>
        {({ data }) => (
          <div className={'productComponents'}>
            <div className="container">
              {title && <h2>{title}</h2>}
              {description && <p className={'textDescription'}>{description}</p>}

              <Default>
                <div className={'productComponents__list row'}>
                  {data && data.map((item, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-4">
                      <div className={'productComponents__list__item'}>
                        <Media type={'image'} data={item.image} />
                        <div className={'productComponents__list__item__content'}>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <Link {...item.url}>More information</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Default>
              <Mobile>
                <Slider isFullWidth={false} delay={7000} slides={mobileViews} showArrows={true} />
              </Mobile>
            </div>
          </div>
        )}
    </List>
  );
};

export default ProductComponents;
