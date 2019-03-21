import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import List from '../List';
import Marker from './components/Marker';
import MapStyles from './components/MapStyles';
import ContactRow from './components/ContactRow';
interface MapItem {
  city: string;
  association: string;
  lat: string;
  lng: string;
  name: string;
  country: string;
  position: string;
  email: string;
  phone: string;
  web: LooseObject;
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
  associationSelectedValue: string;
  mapCenter: { 
    lat: number,
    lng: number
  };
  cities: any;
  countries: any;
  associations: any;
  currentAssociation: string;
}

class ContactsMap extends React.Component<ContactsMapProps & GeolocatedProps, ContactsMapState> {
  constructor(props: ContactsMapProps) {
    super(props);

    this.state = {
      countrySelectedValue: '',
      citySelectedValue: '',
      associationSelectedValue: '',
      mapCenter: { 
        lat: 50,
        lng: 14 
      },
      cities: [],
      countries: [],
      associations: [],
      currentAssociation: 'all'
    };
  }

  componentDidMount = () => this.getUniqControlProps();

  getUniqControlProps() {
    let uniqCities = [];
    let uniqCountries = [];
    let uniqAssociations = [];

    const { mapItems } = this.props.data;

    const propsToArray = () => {
      for (let i = 0; i < mapItems.length; i++) {
        uniqCountries.push(mapItems[i].country);
      }
      for (let i = 0; i < mapItems.length; i++) {
        uniqCities.push(mapItems[i].city);
      }
      for (let i = 0; i < mapItems.length; i++) {
        uniqAssociations.push(mapItems[i].association);
      }
    };

    const uniqueArray = arr => Array.from(new Set(arr));
    
    propsToArray();
    uniqCities = uniqueArray(uniqCities);
    uniqCountries = uniqueArray(uniqCountries);
    uniqAssociations = uniqueArray(uniqAssociations);
    
    return this.setState({
      cities: uniqCities,
      countries: uniqCountries,
      associations: uniqAssociations
    });
  }

  defineLocation(loc: string, type: string) {
    const { mapItems } = this.props.data;

    for (let i = 0; i < mapItems.length; i++) {
      if (mapItems[i][type] === loc) {
        switch (type) {
          case 'country':
            this.setState({
              citySelectedValue: mapItems[i].city,
              associationSelectedValue: mapItems[i].association,
              currentAssociation: mapItems[i].association
            });
            break;
          case 'city':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              associationSelectedValue: mapItems[i].association,
              currentAssociation: mapItems[i].association
            });
            break;
          case 'association':
            this.setState({
              countrySelectedValue: mapItems[i].country,
              citySelectedValue: mapItems[i].city,
              currentAssociation: mapItems[i].association
            });
            break;
          
          default: break;
        }
        this.renderRows();
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
      case 'association':
        this.setState({ 
          associationSelectedValue: safeSearchTypeValue,
          mapCenter: this.defineLocation(safeSearchTypeValue, type)
        });
        break;

      default: return;
    }
  }

  renderControls() {
    const { cities, countries, associations } = this.state;

    return (
      <div className={'map__controls'}>
        <div className={'container'}>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className={'select'}>
                <select 
                  onChange={e => this.onSelectChange(e, 'country')} 
                  value={this.state.countrySelectedValue}
                >
                  {countries && countries.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={'select'}>
                <select 
                  onChange={e => this.onSelectChange(e, 'city')} 
                  value={this.state.citySelectedValue}
                >
                  {cities && cities.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={'select'}>
                <select 
                  onChange={e => this.onSelectChange(e, 'association')} 
                  value={this.state.associationSelectedValue}
                >
                  {associations && associations.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderRows () {
    const { mapItems } = this.props.data;
    const { associations } = this.state;
    let resultRows = [];

    for (let i = 0; i < associations.length; i++) {
      let composedRows = [];

      for (let j = 0; j < mapItems.length; j++) {
        if (mapItems[j].association === associations[i]) {
          if (mapItems[j].association === this.state.currentAssociation || this.state.currentAssociation === 'all') {
            composedRows.push(
              {
                name: mapItems[j].name,
                position: mapItems[j].position,
                email: mapItems[j].email,
                phone: mapItems[j].phone,
                web: mapItems[j].web
              }
            );
          }   
        }
      }
      
      if (this.state.currentAssociation === associations[i] || this.state.currentAssociation === 'all') {
        resultRows.push(
          <ContactRow key={i} title={associations[i]} rows={composedRows} />
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
            <div style={{ width: '100%', position: 'relative' }}>
              {title ? <h2 style={{ paddingBottom: '30px', textAlign: 'center' }}>{title}</h2> : ''}
              
              <section className={'map'}>
                {this.renderControls()}

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
              {this.renderRows()}
            </div>
          </>
        )}
      </List>
    );
  }
}

export default geolocated()(ContactsMap);