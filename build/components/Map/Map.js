"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var google_map_react_1 = require("google-map-react");
var react_geolocated_1 = require("react-geolocated");
exports.GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
var Marker_1 = require("./components/Marker");
var MapRows_1 = require("./components/MapRows");
var ContactRow_1 = require("./components/ContactRow");
var MapBox_1 = require("../../partials/MapBox");
var MapStyles_1 = require("./components/MapStyles");
var getUniqMapControls_1 = require("../../helpers/getUniqMapControls");
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(props) {
        var _this = _super.call(this, props) || this;
        _this.resetFilters = function () {
            _this.setState({
                countrySelectedValue: 'all',
                citySelectedValue: 'all',
                serviceSelectedValue: 'all',
                showBox: false
            });
        };
        _this.state = {
            countrySelectedValue: 'all',
            citySelectedValue: 'all',
            serviceSelectedValue: 'all',
            mapCenter: {
                lat: 50,
                lng: 14
            },
            mapZoom: 5,
            cities: [],
            countries: [],
            services: [],
            currrentEmail: '',
            currentPhone: '',
            currentTitle: '',
            currentAddress: '',
            showBox: false,
            lat: 0,
            lng: 0,
            web: null,
            text: '',
            storeChief: '',
            name: '',
            position: ''
        };
        return _this;
    }
    Map.prototype.readLatLng = function (item) {
        return {
            lat: parseFloat(item.lat),
            lng: parseFloat(item.lng)
        };
    };
    Map.prototype.setMapBox = function (item) {
        this.setState({
            lat: item.lat,
            lng: item.lng,
            currrentEmail: item.email,
            currentPhone: item.phone,
            currentTitle: item.title,
            currentAddress: item.address,
            citySelectedValue: item.city,
            serviceSelectedValue: item.service,
            countrySelectedValue: item.country,
            web: item.web,
            storeChief: item.storeChief,
            text: item.text,
            name: item.name,
            position: item.position,
            showBox: item ? true : !this.state.showBox,
            mapZoom: 14,
            mapCenter: this.readLatLng(item)
        });
    };
    Map.prototype.renderServiceRows = function (mapItems) {
        var countries = getUniqMapControls_1.default(mapItems).countries;
        var resultRows = [];
        for (var i = 0; i < countries.length; i++) {
            var composedRows = [];
            for (var j = 0; j < mapItems.length; j++) {
                if (mapItems[j].country === countries[i]) {
                    if (mapItems[j].country === this.state.countrySelectedValue || this.state.countrySelectedValue === 'all') {
                        if (mapItems[j].city === this.state.citySelectedValue || this.state.citySelectedValue === 'all') {
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
            }
            if (this.state.countrySelectedValue === countries[i] || this.state.countrySelectedValue === 'all') {
                resultRows.push(React.createElement(MapRows_1.default, { key: i, title: countries[i], items: composedRows.reverse() }));
            }
        }
        return resultRows;
    };
    Map.prototype.renderContactRows = function (mapItems) {
        var services = getUniqMapControls_1.default(mapItems).services;
        var resultRows = [];
        for (var i = 0; i < services.length; i++) {
            var composedRows = [];
            for (var j = 0; j < mapItems.length; j++) {
                if (mapItems[j].service === services[i]) {
                    if (mapItems[j].service === this.state.serviceSelectedValue || this.state.serviceSelectedValue === 'all') {
                        composedRows.push({
                            name: mapItems[j].name,
                            position: mapItems[j].position,
                            email: mapItems[j].email,
                            phone: mapItems[j].phone,
                            web: mapItems[j].web
                        });
                    }
                }
            }
            if (this.state.serviceSelectedValue === services[i] || this.state.serviceSelectedValue === 'all') {
                resultRows.push(React.createElement(ContactRow_1.default, { key: i, title: services[i], rows: composedRows }));
            }
        }
        return resultRows;
    };
    Map.prototype.defineLocation = function (loc, type, mapItems) {
        for (var i = 0; i < mapItems.length; i++) {
            if (mapItems[i][type] === loc) {
                switch (type) {
                    case 'country':
                        this.setState({
                            citySelectedValue: 'all',
                            serviceSelectedValue: 'all',
                            countrySelectedValue: mapItems[i].country,
                            mapZoom: 6
                        });
                        // console.log(mapItems[i], mapItems[i].lat, mapItems[i].lng);
                        break;
                    case 'city':
                        this.setState({
                            countrySelectedValue: mapItems[i].country,
                            mapZoom: 11
                        });
                        break;
                    case 'service':
                        this.setState({
                            countrySelectedValue: mapItems[i].country,
                            citySelectedValue: mapItems[i].city,
                            mapZoom: 15
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
    };
    Map.prototype.filterCities = function (country, mapItems) {
        var filteredCities = [];
        mapItems.forEach(function (item) {
            item && item.country && item.city && item.country === country ? filteredCities.push(item.city) : '';
        });
        return filteredCities;
    };
    Map.prototype.onSelectChange = function (event, mapItems, type) {
        var safeSearchTypeValue = event.currentTarget.value;
        switch (type) {
            case 'country':
                this.setState({
                    showBox: false,
                    countrySelectedValue: safeSearchTypeValue,
                    mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
                });
                break;
            case 'city':
                this.setState({
                    showBox: false,
                    citySelectedValue: safeSearchTypeValue,
                    mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
                });
                break;
            case 'service':
                this.setState({
                    showBox: true,
                    serviceSelectedValue: safeSearchTypeValue,
                    mapCenter: this.defineLocation(safeSearchTypeValue, type, mapItems)
                });
                break;
            default: return;
        }
    };
    Map.prototype.renderControls = function (mapItems) {
        var _this = this;
        var _a = getUniqMapControls_1.default(mapItems), countries = _a.countries, services = _a.services;
        var cities = this.filterCities(this.state.countrySelectedValue, mapItems).sort();
        return (React.createElement("div", { className: 'mapControls' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: "row justify-content-center" },
                    React.createElement("div", { className: "col-12 col-md-4 col-lg-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { value: this.state.countrySelectedValue, onChange: function (e) { return _this.onSelectChange(e, mapItems, 'country'); } },
                                this.state.countrySelectedValue === 'all' &&
                                    React.createElement("option", { key: "countrySelectedValue" }, "Select country"),
                                countries && this.orderByAlphabet(countries).map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    this.state.countrySelectedValue !== 'all' &&
                        React.createElement("div", { className: "col-12 col-md-4 col-lg-3" },
                            React.createElement("div", { className: 'select' },
                                React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, mapItems, 'city'); }, value: this.state.citySelectedValue },
                                    this.state.citySelectedValue === 'all' &&
                                        React.createElement("option", { key: "citySelectedValue" }, "Select city"),
                                    cities && cities.map(function (item, i) { return (
                                    // item.children === this.state.countrySelectedValue
                                    React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-4 col-lg-3" },
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.resetFilters(); } }, "reset filters"))))));
    };
    Map.prototype.orderByAlphabet = function (item) {
        item.sort();
        return item;
    };
    Map.prototype.render = function () {
        var _this = this;
        var _a = this.props, mapItems = _a.mapItems, type = _a.type;
        // FOR TESTS
        // for (let i = 0; i < mapItems.length; i++) {
        //   mapItems[i].service = mapItems[i].association;
        // }
        return (React.createElement(React.Fragment, null,
            this.renderControls(mapItems),
            React.createElement("section", { className: 'map' },
                this.state.showBox &&
                    React.createElement(MapBox_1.default, { web: this.state.web, text: this.state.text, city: this.state.citySelectedValue, service: this.state.serviceSelectedValue, storeChief: this.state.storeChief, email: this.state.currrentEmail, phone: this.state.currentPhone, title: this.state.currentTitle, address: this.state.currentAddress, country: this.state.countrySelectedValue, name: this.state.name, position: this.state.position, onClick: function () { return _this.setState({ showBox: !_this.state.showBox }); } }),
                React.createElement(google_map_react_1.default, { yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: exports.GoogleMapsApiKey }, defaultCenter: { lat: 50, lng: 14 }, center: this.state.mapCenter, defaultZoom: 5, zoom: this.state.mapZoom, options: {
                        scrollwheel: false,
                        styles: MapStyles_1.default
                    } }, mapItems && mapItems.map(function (item, i) {
                    return (React.createElement(Marker_1.default, { key: i, lat: parseFloat(item.lat), lng: parseFloat(item.lng), onClick: function () { return _this.setMapBox(item); } }));
                }))),
            React.createElement("div", { className: 'mapRows' }, type === 'service' ? this.renderServiceRows(mapItems) : this.renderContactRows(mapItems))));
    };
    return Map;
}(React.Component));
exports.default = react_geolocated_1.geolocated()(Map);
//# sourceMappingURL=Map.js.map