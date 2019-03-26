import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import Marker from '../Marker';
import MapStyles from './MapStyles';

interface MapComponentState {}

interface MapComponentProps {
  items: LooseObject;
  controls?: boolean;
  mapCenter: {
    lat: number;
    lng: number;
  };
}

class MapComponent extends React.Component<MapComponentProps & GeolocatedProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);
  }

  public render() {

    return (
      <div style={{ width: '100%', position: 'relative' }}>
        
        <section className={'map'}>
          {this.props.items && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: GoogleMapsApiKey }}
              defaultCenter={{ lat: 50, lng: 14 }}
              center={this.props.mapCenter}
              defaultZoom={5}
              options={{ 
                scrollwheel: false,
                styles: MapStyles
              }}
              yesIWantToUseGoogleMapApiInternals={true}
            >
              {this.props.items && 
                this.props.items.map((item, i) => (
                  <Marker
                    key={i}
                    lat={item.lat}
                    lng={item.lng}
                  />
                ))}
            </GoogleMapReact>
          )}
        </section>
      </div>
    );
  }
}

export default geolocated()(MapComponent);
