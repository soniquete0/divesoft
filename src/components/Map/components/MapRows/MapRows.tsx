import * as React from 'react';

import List from '../../../List';
import ServiceRowItem from './components/MapRow';

interface MapRowsProps {
  title: string;
  items: any;
}

const MapRows = (props: MapRowsProps) => {
  const { title, items } = props;

  return (
    <List data={items}>
        {({ data }) => (
          <div className={'mapRow'}>
            <div className="container">
              <div className="row mapRow__list">

                <div className="col-12 col-md-3">
                  <h3 className={'mapRow__list__title'}>{title}</h3>
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

export default MapRows;
