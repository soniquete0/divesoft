import * as React from 'react';

import List from '../List';
import MapComponent from './components/MapComponent';

export interface MapProps {
  data: LooseObject;
}

const Map = (props: MapProps) => {
  return (
    <List data={props.data.items}>{({ data }) => {
      return (
        <MapComponent 
          controls={props.data.controls} 
          title={props.data.title}
          items={data} 
        />
      );
    }}</List>);
};

export default Map;