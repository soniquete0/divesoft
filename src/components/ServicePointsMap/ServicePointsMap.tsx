import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import List from '../List';
import Marker from './components/Marker';
import MapStyles from './components/MapStyles';
import ServiceRow from './components/ServiceRow';

interface MapItem {
  city: string;
  service: string;
  lat: string;
  lng: string;
  title: string;
  country: string;
  text?: string;
  address?: string;
  storeChief?: string;
  email?: string;
  phone?: string;
  web?: LooseObject;
}

export interface ServicePointsMapProps {
  data: {
    title: string;
    mapItems: MapItem[];
  };
}

export interface ServicePointsMapState {
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
  currentCountry: string;
}

class ServicePointsMap extends React.Component<ServicePointsMapProps & GeolocatedProps, ServicePointsMapState> {
  constructor(props: ServicePointsMapProps) {
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
      currentCountry: 'all'
    };
  }

  getUniqControlProps(mapItems: LooseObject[] ) {
    let uniqCities = [];
    let uniqCountries = [];
    let uniqServices = [];

    const propsToArray = () => {
      for (let i = 0; i < mapItems.length; i++) {
        uniqCountries.push(mapItems[i].country);
      }
      for (let i = 0; i < mapItems.length; i++) {
        uniqCities.push(mapItems[i].city);
      }
      for (let i = 0; i < mapItems.length; i++) {
        uniqServices.push(mapItems[i].service);
      }
    };

    const uniqueArray = arr => Array.from(new Set(arr));

    propsToArray();
    uniqCities = uniqueArray(uniqCities);
    uniqCountries = uniqueArray(uniqCountries);
    uniqServices = uniqueArray(uniqServices);

    return {
      cities: uniqCities,
      countries: uniqCountries,
      services: uniqServices
    };
  }

  defineLocation(loc: string, type: string) {
    const { mapItems } = this.props.data;

    for (let i = 0; i < mapItems.length; i++) {
      if (mapItems[i][type] === loc) {
        switch (type) {
          case 'country':
            this.setState({
              citySelectedValue: mapItems[i].city,
              serviceSelectedValue: mapItems[i].service,
              currentCountry: mapItems[i].country
            });
            break;
          case 'city':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              serviceSelectedValue: mapItems[i].service,
              currentCountry: mapItems[i].country
            });
            break;
          case 'service':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              citySelectedValue: mapItems[i].city,
              currentCountry: mapItems[i].country
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

  onSelectChange(event: React.FormEvent<HTMLSelectElement>, type?: string) {
    var safeSearchTypeValue: string = event.currentTarget.value;

    switch (type) {
      case 'country':
        this.setState({
          countrySelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type)
        });
        break;
      case 'city':
        this.setState({
          citySelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type)
        });
        break;
      case 'service':
        this.setState({
          serviceSelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type)
        });
        break;

      default: return;
    }
  }

  resetFilters = () => {
    this.setState({
      countrySelectedValue: 'all',
      citySelectedValue: 'all',
      serviceSelectedValue: 'all',
      currentCountry: 'all',
    });
  }

  renderControls(mapItems: LooseObject[]) {
    const { cities, countries, services } = this.getUniqControlProps(mapItems);

    return (
      <div className={'map__controls'}>
        <div className={'container'}>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className={'select'}>
                <select
                  onChange={e => this.onSelectChange(e, 'country')}
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
                  onChange={e => this.onSelectChange(e, 'city')}
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
                  onChange={e => this.onSelectChange(e, 'service')}
                  value={this.state.serviceSelectedValue}
                >
                  <option value={'all'} key="all">Select service</option>
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

  renderRows (mapItems: LooseObject[] ) {
    const { countries } = this.getUniqControlProps(mapItems);
    let resultRows = [];

    for (let i = 0; i < countries.length; i++) {
      let composedRows = [];

      for (let j = 0; j < mapItems.length; j++) {
        if (mapItems[j].country === countries[i]) {
          if (mapItems[j].country === this.state.currentCountry || this.state.currentCountry === 'all') {
            composedRows.push(
              {
                city: mapItems[j].city,
                service: mapItems[j].service,
                country: mapItems[j].country,
                title: mapItems[j].title,
                text: mapItems[j].text,
                address: mapItems[j].address,
                storeChief: mapItems[j].storeChief,
                email: mapItems[j].email,
                phone: mapItems[j].phone,
                web: mapItems[j].web
              }
            );
          }
        }
      }

      if (this.state.currentCountry === countries[i] || this.state.currentCountry === 'all') {
        resultRows.push(
          <ServiceRow key={i} title={countries[i]} items={composedRows} />
        );
      }
    }

    return resultRows;
  }

  public render() {
    const { title, mapItems } = this.props.data;

    return (
      <List data={mapItems}>
        {({ data }) => (
          <>
            <div className={'servicePointsMapWrapper'}>
              {title ?
                <div className="container">
                  <p className={'textDescription servicePointsMapWrapper__title'}>{title}</p>
                </div> : ''}
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

            <div className={'map__rows'}>
              {this.renderRows(data)}
            </div>
          </>
        )}
      </List>
    );
  }
}

export default geolocated()(ServicePointsMap);
