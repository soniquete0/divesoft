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
        return _super.call(this, props) || this;
    }
    MapComponent.prototype.render = function () {
        var defaultCenter = { lat: 50.08804, lng: 14.42076 };
        return (React.createElement("div", { style: { width: '100%', position: 'relative' } },
            this.props.title ?
                React.createElement("h2", { style: { paddingBottom: '30px', textAlign: 'center' } }, this.props.title) : '',
            this.props.controls ?
                React.createElement(Controls, { items: this.props.items }) : '',
            React.createElement("section", { className: 'map' }, this.props.items && (React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: defaultCenter, defaultZoom: 3, options: {
                    scrollwheel: false,
                    styles: MapStyles
                }, yesIWantToUseGoogleMapApiInternals: true }, this.props.items &&
                this.props.items.map(function (item, i) { return (React.createElement(Marker, { key: i, lat: item.lat, lng: item.lng })); }))))));
    };
    return MapComponent;
}(React.Component));
export default geolocated()(MapComponent);
//# sourceMappingURL=MapComponent.js.map