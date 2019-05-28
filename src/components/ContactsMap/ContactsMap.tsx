import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import List from '../List';
import Marker from './components/Marker';
import MapStyles from './components/MapStyles';
import ContactRow from './components/ContactRow';
import getUniqMapControls from '../../helpers/getUniqMapControls';

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

export interface ContactsMapState {
  countrySelectedValue: string;
  citySelectedValue: string;
  serviceSelectedValue: string;
  mapCenter: {
    lat: number,
    lng: number
  };
  cities: Array<string>;
  countries: Array<string>;
  services: Array<string>;
  currentService: string;
}

class ContactsMap extends React.Component<ContactsMapProps & GeolocatedProps, ContactsMapState> {
  constructor(props: ContactsMapProps) {
    super(props);

    this.state = {
      countrySelectedValue: 'all',
      citySelectedValue: 'all',
      serviceSelectedValue: 'all',
      mapCenter: {
        lat: 50,
        lng: 14
      },
      cities: [],
      countries: [],
      services: [],
      currentService: 'all',
    };
  }

  resetFilters = () => {
    this.setState({
      countrySelectedValue: 'all',
      citySelectedValue: 'all',
      serviceSelectedValue: 'all',
      currentService: 'all',
    });
  }

  defineLocation(loc: string, type: string, mapItems: any) {
    for (let i = 0; i < mapItems.length; i++) {
      if (mapItems[i][type] === loc) {
        switch (type) {
          case 'country':
            this.setState({
              citySelectedValue: mapItems[i].city,
              serviceSelectedValue: mapItems[i].service,
              currentService: mapItems[i].service
            });
            break;
          case 'city':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              serviceSelectedValue: mapItems[i].service,
              currentService: mapItems[i].service
            });
            break;
          case 'service':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              citySelectedValue: mapItems[i].city,
              currentService: mapItems[i].service
            });
            break;

          default: break;
        }
        
        return {
          lat: parseFloat(mapItems[i].lat),
          lng: parseFloat(mapItems[i].lng)
        };
      }
    }
  }

  onSelectChange(event: React.FormEvent<HTMLSelectElement>, mapItems: any, type?: string) {
    var safeSearchTypeValue: string = event.currentTarget.value;

    switch (type) {
      case 'country':
        this.setState({
          countrySelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
        });
        break;
      case 'city':
        this.setState({
          citySelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
        });
        break;
      case 'service':
        this.setState({
          serviceSelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
        });
        break;

      default: return;
    }
  }

  renderControls(mapItems: any) {
    const { cities, countries, services } = getUniqMapControls(mapItems);

    return (
      <div className={'map__controls'}>
        <div className={'container'}>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, mapItems, 'country')}
                  value={this.state.countrySelectedValue}
                >
                  <option value={'all'} key="all">Select country</option>
                  {countries && countries.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, mapItems, 'city')}
                  value={this.state.citySelectedValue}
                >
                  <option value={'all'} key="all">Select city</option>
                  {cities && cities.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, mapItems, 'service')}
                  value={this.state.serviceSelectedValue}
                >
                   <option value={'all'} key="all">Select assoc.</option>
                  {services && services.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <button className={'btn'} onClick={() => this.resetFilters()}>reset filters</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderRows (data: any) {
    const { services } = this.state;
    let resultRows = [];

    for (let i = 0; i < services.length; i++) {
      let composedRows = [];

      for (let j = 0; j < data.length; j++) {
        if (data[j].service === services[i]) {
          if (data[j].service === this.state.currentService || this.state.currentService === 'all') {
            composedRows.push(
              {
                name: data[j].name,
                position: data[j].position,
                email: data[j].email,
                phone: data[j].phone,
                web: data[j].web
              }
            );
          }
        }
      }

      if (this.state.currentService === services[i] || this.state.currentService === 'all') {
        resultRows.push(
          <ContactRow key={i} title={services[i]} rows={composedRows} />
        );
      }
    }

    return <div className={'map__rows'}>{resultRows}</div>;
  }

  public render() {
    const { title, mapItems } = this.props.data;

    return (
      <List data={mapItems}>
        {({ data }) => (
          <>
            <div className={'contactsMapWrapper'}>
              {title ? <h2 style={{ paddingBottom: '30px', textAlign: 'center' }}>{title}</h2> : ''}
              {this.renderControls(data)}
              <section className={'map'}>
                {mapItems && (
                  <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals={true}
                    bootstrapURLKeys={{ key: GoogleMapsApiKey }}
                    defaultCenter={{ lat: 50, lng: 14 }}
                    center={this.state.mapCenter}
                    defaultZoom={5}
                    options={{
                      scrollwheel: false,
                      styles: MapStyles
                    }}
                  >
                    {data && data.map((item, i) => (
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

            {this.renderRows(data)}
          </>
        )}
      </List>
    );
  }
}

export default geolocated()(ContactsMap);