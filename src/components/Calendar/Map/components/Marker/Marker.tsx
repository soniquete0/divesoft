import * as React from 'react';

interface MarkerProps {
  lat: number;
  lng: number; 
}

const Marker: React.SFC<MarkerProps> = props => {

  return (
    <>
      <div className={`marker`} />
    </>
  );
};

export default Marker;