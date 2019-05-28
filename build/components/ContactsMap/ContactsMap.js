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
var ContactRow_1 = require("./components/ContactRow");
var getUniqMapControls_1 = require("../../helpers/getUniqMapControls");
var ContactsMap = /** @class */ (function (_super) {
    __extends(ContactsMap, _super);
    function ContactsMap(props) {
        var _this = _super.call(this, props) || this;
        _this.resetFilters = function () {
            _this.setState({
                countrySelectedValue: 'all',
                citySelectedValue: 'all',
                serviceSelectedValue: 'all',
                currentService: 'all',
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
            currentService: 'all',
        };
        return _this;
    }
    ContactsMap.prototype.defineLocation = function (loc, type, mapItems) {
        for (var i = 0; i < mapItems.length; i++) {
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
    };
    ContactsMap.prototype.onSelectChange = function (event, mapItems, type) {
        var safeSearchTypeValue = event.currentTarget.value;
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
    };
    ContactsMap.prototype.renderControls = function (mapItems) {
        var _this = this;
        var _a = getUniqMapControls_1.default(mapItems), cities = _a.cities, countries = _a.countries, services = _a.services;
        return (React.createElement("div", { className: 'map__controls' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, mapItems, 'country'); }, value: this.state.countrySelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select country"),
                                countries && countries.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, mapItems, 'city'); }, value: this.state.citySelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select city"),
                                cities && cities.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("div", { className: 'select' },
                            React.createElement("select", { onChange: function (e) { return _this.onSelectChange(e, mapItems, 'service'); }, value: this.state.serviceSelectedValue },
                                React.createElement("option", { value: 'all', key: "all" }, "Select assoc."),
                                services && services.map(function (item, i) { return (React.createElement("option", { key: i, value: item }, item)); })))),
                    React.createElement("div", { className: "col-12 col-md-3" },
                        React.createElement("button", { className: 'btn', onClick: function () { return _this.resetFilters(); } }, "reset filters"))))));
    };
    ContactsMap.prototype.renderRows = function (data) {
        var services = this.state.services;
        var resultRows = [];
        for (var i = 0; i < services.length; i++) {
            var composedRows = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].service === services[i]) {
                    if (data[j].service === this.state.currentService || this.state.currentService === 'all') {
                        composedRows.push({
                            name: data[j].name,
                            position: data[j].position,
                            email: data[j].email,
                            phone: data[j].phone,
                            web: data[j].web
                        });
                    }
                }
            }
            if (this.state.currentService === services[i] || this.state.currentService === 'all') {
                resultRows.push(React.createElement(ContactRow_1.default, { key: i, title: services[i], rows: composedRows }));
            }
        }
        return React.createElement("div", { className: 'map__rows' }, resultRows);
    };
    ContactsMap.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, mapItems = _a.mapItems;
        return (React.createElement(List_1.default, { data: mapItems }, function (_a) {
            var data = _a.data;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'contactsMapWrapper' },
                    title ? React.createElement("h2", { style: { paddingBottom: '30px', textAlign: 'center' } }, title) : '',
                    _this.renderControls(data),
                    React.createElement("section", { className: 'map' }, mapItems && (React.createElement(google_map_react_1.default, { yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: exports.GoogleMapsApiKey }, defaultCenter: { lat: 50, lng: 14 }, center: _this.state.mapCenter, defaultZoom: 5, options: {
                            scrollwheel: false,
                            styles: MapStyles_1.default
                        } }, data && data.map(function (item, i) { return (React.createElement(Marker_1.default, { key: i, lat: item.lat, lng: item.lng })); }))))),
                _this.renderRows(data)));
        }));
    };
    return ContactsMap;
}(React.Component));
exports.default = react_geolocated_1.geolocated()(ContactsMap);
//# sourceMappingURL=ContactsMap.js.map