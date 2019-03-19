import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import Marker from '../Marker';
import MapStyles from './MapStyles';
import Controls from './Controls';

interface MapComponentState {}

interface MapComponentProps {
  items: LooseObject;
  title?: string;
  controls?: boolean;
}

class MapComponent extends React.Component<MapComponentProps & GeolocatedProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);
  }

  getMapBounds = (map, maps, locations) => {
    const bounds = new maps.LatLngBounds();

    locations.forEach(location => {
      bounds.extend(new maps.LatLng(location.lat, location.lng));
    });

    if (this.props.coords) {
      bounds.extend(new maps.LatLng(this.props.coords.latitude, this.props.coords.longitude));
    }

    return bounds;
  }

  apiIsLoaded = (map, maps, locations) => {
    if (map && locations && locations.length > 0) {
      const bounds = this.getMapBounds(map, maps, locations);
      map.fitBounds(bounds);
    }
  }

  public render() {
    const defaultCenter = { lat: 50.08804, lng: 14.42076 };
    const defaultZoom = 1;

    return (
      <div style={{ width: '100%', position: 'relative' }}>
        {this.props.title ? 
          <h2 style={{ padding: '30px 0', textAlign: 'center' }}>
            {this.props.title}
          </h2> : ''}

        {this.props.controls ?
          <Controls items={this.props.items} /> : ''}
        
        <section className={'map'}>
          {this.props.items && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: GoogleMapsApiKey }}
              defaultCenter={defaultCenter}
              defaultZoom={defaultZoom}
              options={{ 
                scrollwheel: false,
                styles: MapStyles
              }}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={
                ({ map, maps }) => this.apiIsLoaded(map, maps, this.props.items)}
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
