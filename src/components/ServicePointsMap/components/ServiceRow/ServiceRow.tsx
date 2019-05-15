import * as React from 'react';

import List from '../../../List';
import ServiceRowItem from './components/ServiceRowItem';

interface ServiceRowProps {
  title: string;
  items: any;
}

const ServiceRow = (props: ServiceRowProps) => {
  const { title, items } = props;

  return (
    <List data={items}>
        {({ data }) => (
          <div className={'serviceRow'}>
            <div className="container">
              <div className="row serviceRow__list">

                <div className="col-12 col-md-3">
                  <h3 className={'serviceRow__list__title'}>{title}</h3>
                </div>
                <div className="col-12 col-md-9">
                  {data && data.map((item, i) => (
                    <ServiceRowItem
                      key={i}
                      web={item.web}
                      text={item.text}
                      title={item.title}
                      phone={item.phone}
                      email={item.email}
                      address={item.address}
                      storeChief={item.storeChief}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
      )}
    </List>
  );
};

export default ServiceRow;
