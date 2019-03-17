import React from 'react';

export interface ControlsProps {
  items: LooseObject;
}

const Controls = (props: ControlsProps) => {

  let cities = [];
  let countries = [];
  let associations = [];

  const propsToArray = () => {
    for (let i = 0; i < props.items.length; i++) {
      countries.push(props.items[i].country);
    }
    for (let i = 0; i < props.items.length; i++) {
      cities.push(props.items[i].city);
    }
    for (let i = 0; i < props.items.length; i++) {
      associations.push(props.items[i].association);
    }
  };

  const uniqueArray = arr => Array.from(new Set(arr));
  
  propsToArray();
  cities = uniqueArray(cities);
  countries = uniqueArray(countries);
  associations = uniqueArray(associations);

  return (
    <div className={'map__controls'}>
      <div className={'container'}>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className={'select'}>
              <select>
                {countries && countries.map((item, i) => (
                  <option key={i} value={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={'select'}>
              <select>
                {cities && cities.map((item, i) => (
                      <option key={i} value={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={'select'}>
              <select>
                {associations && associations.map((item, i) => (
                  <option key={i} value={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;