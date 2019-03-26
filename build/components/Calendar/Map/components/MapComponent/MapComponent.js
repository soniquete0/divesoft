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
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(props) {
        return _super.call(this, props) || this;
    }
    MapComponent.prototype.render = function () {
        return (React.createElement("div", { style: { width: '100%', position: 'relative' } },
            React.createElement("section", { className: 'map' }, this.props.items && (React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: { lat: 50, lng: 14 }, center: this.props.mapCenter, defaultZoom: 5, options: {
                    scrollwheel: false,
                    styles: MapStyles
                }, yesIWantToUseGoogleMapApiInternals: true }, this.props.items &&
                this.props.items.map(function (item, i) { return (React.createElement(Marker, { key: i, lat: item.lat, lng: item.lng })); }))))));
    };
    return MapComponent;
}(React.Component));
export default geolocated()(MapComponent);
//# sourceMappingURL=MapComponent.js.map