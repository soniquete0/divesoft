import * as React from 'react';

import Map from '../Map';
import List from '../List';

interface MapItem {
  city: string;
  service: string;
  lat: string;
  lng: string;
  name: string;
  country: string;
  position: string;
  email: string;
  phone: string;
  web?: LooseObject;
}

export interface ContactsMapProps {
  data: {
    title: string;
    mapItems: MapItem[];
  };
}

export default function ContactsMap(props: ContactsMapProps) {
  const { title, mapItems } = props.data;

  return (
    <List data={mapItems}>
      {({ data }) => (
        <div className={'contactsMapWrapper'}>
          {title ? <h2 style={{ paddingBottom: '30px', textAlign: 'center' }}>{title}</h2> : ''}
          <Map mapItems={data} type={'contacts'} />
        </div>
      )}
    </List>
  );
}