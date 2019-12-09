import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyDCmyHYLT_dFcUvglVGT5BINiLFXwT0GGA';

import MapBox from '../../../../../partials/MapBox';
import Marker from '../../../../Map/components/Marker';
import MapStyles from '../../../../Map/components/MapStyles';

interface MapComponentState {
  country: string;
  date: string;
  keyword: string;
  text: string;
  url?: LooseObject;
  showBox: boolean;
}

interface MapComponentProps {
  items: LooseObject;
  controls?: boolean;
  reset?: boolean;
  mapCenter: {
    lat: number;
    lng: number;
  };
}

class MapComponent extends React.Component<MapComponentProps & GeolocatedProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);

    this.state = {
      country: '',
      date: '',
      keyword: '',
      text: '',
      url: null,
      showBox: false
    };
  }

  setMapBox(item: any) {
    this.setState({
      country: item.country,
      date: item.date,
      keyword: item.keyword,
      text: item.text,
      url: item.url,
      showBox: item ? true : !this.state.showBox
    });
  }

  public render() {

    return (
      <div style={{ width: '100%', position: 'relative' }}>    
        <section className={'map'}>
          {this.state.showBox && 
            <MapBox
              title={this.state.text}
              country={this.state.country}
              city={this.state.date}
              url={this.state.url}
              keywords={this.state.keyword}
              onClick={() => this.setState({ showBox: !this.state.showBox })} 
            />
          }
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
                    onClick={() => this.setMapBox(item)} 
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
