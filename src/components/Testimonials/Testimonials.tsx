import * as React from 'react';
import Responsive from 'react-responsive';

import List from '../List';
import Media from '../../partials/Media';
import Slider from '../../partials/Slider';

interface Testimonial {
  img: LooseObject;
  title: string;
  from: string;
  text: string;
}

export interface TestimonialsProps {
  data: {
    title: string;
    description: string;
    testimonials: Testimonial[];
  };
}

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const Testimonials = (props: TestimonialsProps) => {
  const { title, description, testimonials } = props.data;

  return (
    <List data={testimonials}>
      {({ data }) => (
        <div className={'testimonials'}>
          <div className="container">
            {title && <h2>{title}</h2>}
            {description && <p className={'testimonials__description textDescription'}>{description}</p>}

            <Default>
              <div className={'testimonials__list'}>
                <div className="row">
                  {data && data.map((item, i) => (
                    <div key={i} className={'col-12 col-md-4'}>
                      <div className={'testimonials__list__item'}>
                        {item.img && <Media type={'image'} data={item.img} />}
                        {item.title && <h4>{item.title}</h4>}
                        {item.from && <span>{item.from}</span>}
                        {item.text && <p>{item.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Default>

            <Mobile>
              <Slider
                slides={data && data.map((item, i) => (
                  <div key={i} className={'col-12'}>
                    <div className={'testimonials__list__item'}>
                      {item.img && <Media type={'image'} data={item.img} />}
                      {item.title && <h4>{item.title}</h4>}
                      {item.from && <span>{item.from}</span>}
                      {item.text && <p>{item.text}</p>}
                    </div>
                  </div>
                ))}
                delay={7000}
                showArrows={data.length > 1 ? true : false}
                autoplay={data.length > 1 ? true : false}
                isFullWidth={false}
              />
            </Mobile>
          </div>
        </div>
      )}
    </List>
  );
};

export default Testimonials;
