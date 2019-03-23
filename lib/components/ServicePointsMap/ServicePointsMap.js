"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var _react = _interopRequireDefault(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _reactGeolocated = require("react-geolocated");

var _List = _interopRequireDefault(require("../List"));

var _Marker = _interopRequireDefault(require("./components/Marker"));

var _MapStyles = _interopRequireDefault(require("./components/MapStyles"));

var _ServiceRow = _interopRequireDefault(require("./components/ServiceRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
exports.GoogleMapsApiKey = GoogleMapsApiKey;

var ServicePointsMap =
/** @class */
function (_super) {
  __extends(ServicePointsMap, _super);

  function ServicePointsMap(props) {
    var _this = _super.call(this, props) || this;

    _this.componentDidMount = function () {
      return _this.getUniqControlProps();
    };

    _this.state = {
      countrySelectedValue: '',
      citySelectedValue: '',
      serviceSelectedValue: '',
      mapCenter: {
        lat: 50,
        lng: 14
      },
      cities: [],
      countries: [],
      services: [],
      currentCountry: 'all'
    };
    return _this;
  }

  ServicePointsMap.prototype.getUniqControlProps = function () {
    var uniqCities = [];
    var uniqCountries = [];
    var uniqServices = [];
    var mapItems = this.props.data.mapItems;

    var propsToArray = function propsToArray() {
      for (var i = 0; i < mapItems.length; i++) {
        uniqCountries.push(mapItems[i].country);
      }

      for (var i = 0; i < mapItems.length; i++) {
        uniqCities.push(mapItems[i].city);
      }

      for (var i = 0; i < mapItems.length; i++) {
        uniqServices.push(mapItems[i].service);
      }
    };

    var uniqueArray = function uniqueArray(arr) {
      return Array.from(new Set(arr));
    };

    propsToArray();
    uniqCities = uniqueArray(uniqCities);
    uniqCountries = uniqueArray(uniqCountries);
    uniqServices = uniqueArray(uniqServices);
    return this.setState({
      cities: uniqCities,
      countries: uniqCountries,
      services: uniqServices
    });
  };

  ServicePointsMap.prototype.defineLocation = function (loc, type) {
    var mapItems = this.props.data.mapItems;

    for (var i = 0; i < mapItems.length; i++) {
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

          default:
            break;
        }

        this.renderRows();
        return {
          lat: parseFloat(mapItems[i].lat),
          lng: parseFloat(mapItems[i].lng)
        };
      }
    }
  };

  ServicePointsMap.prototype.onSelectChange = function (event, type) {
    var safeSearchTypeValue = event.currentTarget.value;

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

      default:
        return;
    }
  };

  ServicePointsMap.prototype.renderControls = function () {
    var _this = this;

    var _a = this.state,
        cities = _a.cities,
        countries = _a.countries,
        services = _a.services;
    return _react.default.createElement("div", {
      className: 'map__controls'
    }, _react.default.createElement("div", {
      className: 'container'
    }, _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-12 col-md-4"
    }, _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", {
      onChange: function onChange(e) {
        return _this.onSelectChange(e, 'country');
      },
      value: this.state.countrySelectedValue
    }, countries && countries.map(function (item, i) {
      return _react.default.createElement("option", {
        key: i,
        value: item
      }, item);
    })))), _react.default.createElement("div", {
      className: "col-12 col-md-4"
    }, _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", {
      onChange: function onChange(e) {
        return _this.onSelectChange(e, 'city');
      },
      value: this.state.citySelectedValue
    }, cities && cities.map(function (item, i) {
      return _react.default.createElement("option", {
        key: i,
        value: item
      }, item);
    })))), _react.default.createElement("div", {
      className: "col-12 col-md-4"
    }, _react.default.createElement("div", {
      className: 'select'
    }, _react.default.createElement("select", {
      onChange: function onChange(e) {
        return _this.onSelectChange(e, 'service');
      },
      value: this.state.serviceSelectedValue
    }, services && services.map(function (item, i) {
      return _react.default.createElement("option", {
        key: i,
        value: item
      }, item);
    })))))));
  };

  ServicePointsMap.prototype.renderRows = function () {
    var mapItems = this.props.data.mapItems;
    var countries = this.state.countries;
    var resultRows = [];

    for (var i = 0; i < countries.length; i++) {
      var composedRows = [];

      for (var j = 0; j < mapItems.length; j++) {
        if (mapItems[j].country === countries[i]) {
          if (mapItems[j].country === this.state.currentCountry || this.state.currentCountry === 'all') {
            composedRows.push({
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
            });
          }
        }
      }

      if (this.state.currentCountry === countries[i] || this.state.currentCountry === 'all') {
        resultRows.push(_react.default.createElement(_ServiceRow.default, {
          key: i,
          title: countries[i],
          items: composedRows
        }));
      }
    }

    return resultRows;
  };

  ServicePointsMap.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        mapItems = _a.mapItems;
    return _react.default.createElement(_List.default, {
      data: mapItems
    }, function (_a) {
      var data = _a.data;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: 'servicePointsMapWrapper'
      }, title ? _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("p", {
        className: 'textDescription servicePointsMapWrapper__title'
      }, title)) : '', _react.default.createElement("section", {
        className: 'map'
      }, _this.renderControls(), mapItems && _react.default.createElement(_googleMapReact.default, {
        yesIWantToUseGoogleMapApiInternals: true,
        bootstrapURLKeys: {
          key: GoogleMapsApiKey
        },
        defaultCenter: {
          lat: 50,
          lng: 14
        },
        center: _this.state.mapCenter,
        defaultZoom: 5,
        options: {
          scrollwheel: false,
          styles: _MapStyles.default
        }
      }, data && data.map(function (item, i) {
        return _react.default.createElement(_Marker.default, {
          key: i,
          lat: item.lat,
          lng: item.lng
        });
      })))), _react.default.createElement("div", {
        className: 'map__rows'
      }, _this.renderRows()));
    });
  };

  return ServicePointsMap;
}(_react.default.Component);

var _default = (0, _reactGeolocated.geolocated)()(ServicePointsMap);

exports.default = _default;