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
var List_1 = require("../List");
var Marker_1 = require("./components/Marker");
var MapStyles_1 = require("./components/MapStyles");
var ServiceRow_1 = require("./components/ServiceRow");
var ServicePointsMap = /** @class */ (function (_super) {
    __extends(ServicePointsMap, _super);
    function ServicePointsMap(props) {
        var _this = _super.call(this, props) || this;
        _this.resetFilters = function () {
            _this.setState({
                countrySelectedValue: 'all',
                citySelectedValue: 'all',
                serviceSelectedValue: 'all',
                currentCountry: 'all',
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
            cities: [],
            countries: [],
            services: [],
            currentCountry: 'all'
        };
        return _this;
    }
    ServicePointsMap.prototype.getUniqControlProps = function (mapItems) {
        var uniqCities = [];
        var uniqCountries = [];
        var uniqServices = [];
        var propsToArray = function () {
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
        var uniqueArray = function (arr) { return Array.from(new Set(arr)); };
        propsToArray();
        uniqCities = uniqueArray(uniqCities);
        uniqCountries = uniqueArray(uniqCountries);
        uniqServices = uniqueArray(uniqServices);
        return {
            cities: uniqCities,
            countries: uniqCountries,
            services: uniqServices
        };
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
                    default: break;
                }
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
            default: return;
        }
    };
    ServicePointsMap.prototype.renderControls = function (mapItems) {
        var _this = this;
        var _a = this.getUniqControlProps(mapItems), cities = _a.cities, countries = _a.countries, services = _a.services;
        return (React.createElement("div", { className: 'map__controls' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, 'country'); }, value: this.state.countrySelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select country"),
                                countries && countries.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, 'city'); }, value: this.state.citySelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select city"),
                                cities && cities.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, 'service'); }, value: this.state.serviceSelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select service"),
                                services && services.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.resetFilters(); } }, "reset filters"))))));
    };
    ServicePointsMap.prototype.renderRows = function (mapItems) {
        var countries = this.getUniqControlProps(mapItems).countries;
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
                resultRows.push(React.createElement(ServiceRow_1.default, { key: i, title: countries[i], items: composedRows }));
            }
        }
        return resultRows;
    };
    ServicePointsMap.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, mapItems = _a.mapItems;
        return (React.createElement(List_1.default, { data: mapItems }, function (_a) {
            var data = _a.data;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'servicePointsMapWrapper' },
                    title ?
                        React.createElement("div", { className: "container" },
                            React.createElement("p", { className: 'textDescription servicePointsMapWrapper__title' }, title)) : '',
                    _this.renderControls(data),
                    React.createElement("section", { className: 'map' }, mapItems && (React.createElement(google_map_react_1.default, { yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: exports.GoogleMapsApiKey }, defaultCenter: { lat: 50, lng: 14 }, center: _this.state.mapCenter, defaultZoom: 5, options: {
                            scrollwheel: false,
                            styles: MapStyles_1.default
                        } }, data && data.map(function (item, i) { return (React.createElement(Marker_1.default, { key: i, lat: item.lat, lng: item.lng })); }))))),
                React.createElement("div", { className: 'map__rows' }, _this.renderRows(data))));
        }));
    };
    return ServicePointsMap;
}(React.Component));
exports.default = react_geolocated_1.geolocated()(ServicePointsMap);
//# sourceMappingURL=ServicePointsMap.js.map