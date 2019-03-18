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
import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { geolocated } from 'react-geolocated';
export var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from '../Marker';
import MapStyles from './MapStyles';
import Controls from './Controls';
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.getMapBounds = function (map, maps, locations) {
            var bounds = new maps.LatLngBounds();
            locations.forEach(function (location) {
                bounds.extend(new maps.LatLng(location.lat, location.lng));
            });
            if (_this.props.coords) {
                bounds.extend(new maps.LatLng(_this.props.coords.latitude, _this.props.coords.longitude));
            }
            return bounds;
        };
        _this.apiIsLoaded = function (map, maps, locations) {
            if (map && locations && locations.length > 0) {
                var bounds = _this.getMapBounds(map, maps, locations);
                map.fitBounds(bounds);
            }
        };
        return _this;
    }
    MapComponent.prototype.render = function () {
        var _this = this;
        var defaultCenter = { lat: 50.08804, lng: 14.42076 };
        var defaultZoom = 3;
        return (React.createElement("div", { style: { width: '100%', position: 'relative' } },
            this.props.title ?
                React.createElement("h2", { style: { padding: '30px 0', textAlign: 'center' } }, this.props.title) : '',
            this.props.controls ?
                React.createElement(Controls, { items: this.props.items }) : '',
            React.createElement("section", { className: 'map' }, this.props.items && (React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: defaultCenter, center: defaultCenter, defaultZoom: defaultZoom, options: {
                    scrollwheel: false,
                    styles: MapStyles
                }, yesIWantToUseGoogleMapApiInternals: true, onGoogleApiLoaded: function (_a) {
                    var map = _a.map, maps = _a.maps;
                    return _this.apiIsLoaded(map, maps, _this.props.items);
                } }, this.props.items &&
                this.props.items.map(function (item, i) { return (React.createElement(Marker, { key: i, lat: item.lat, lng: item.lng })); }))))));
    };
    return MapComponent;
}(React.Component));
export default geolocated()(MapComponent);
//# sourceMappingURL=MapComponent.js.map