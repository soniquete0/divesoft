export default function getUniqMapControls(data: any) {
  let uniqCities = [];
  let uniqCountries = [];
  let uniqServices = [];

  const propsToArray = () => {
    for (let i = 0; i < data.length; i++) {
      uniqCountries.push(data[i].country);
    }
    for (let i = 0; i < data.length; i++) {
      uniqCities.push(data[i].city);
    }
    for (let i = 0; i < data.length; i++) {
      uniqServices.push(data[i].service);
    }
  };

  const uniqueArray = arr => Array.from(new Set(arr));

  propsToArray();
  uniqCities = uniqueArray(uniqCities);
  uniqCountries = uniqueArray(uniqCountries);
  uniqServices = uniqueArray(uniqServices);

  return {
    cities: uniqCities.sort(),
    countries: uniqCountries.sort(),
    services: uniqServices.sort()
  };
}
