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
var MapBox_1 = require("../../../../../partials/MapBox");
var Marker_1 = require("../../../../Map/components/Marker");
var MapStyles_1 = require("../../../../Map/components/MapStyles");
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            country: '',
            date: '',
            keyword: '',
            text: '',
            url: null,
            showBox: false
        };
        return _this;
    }
    MapComponent.prototype.setMapBox = function (item) {
        this.setState({
            country: item.country,
            date: item.date,
            keyword: item.keyword,
            text: item.text,
            url: item.url,
            showBox: item ? true : !this.state.showBox
        });
    };
    MapComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { width: '100%', position: 'relative' } },
            React.createElement("section", { className: 'map' },
                this.state.showBox &&
                    React.createElement(MapBox_1.default, { title: this.state.text, country: this.state.country, city: this.state.date, url: this.state.url, keywords: this.state.keyword, onClick: function () { return _this.setState({ showBox: !_this.state.showBox }); } }),
                this.props.items && (React.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: exports.GoogleMapsApiKey }, defaultCenter: { lat: 50, lng: 14 }, center: this.props.mapCenter, defaultZoom: 5, options: {
                        scrollwheel: false,
                        styles: MapStyles_1.default
                    }, yesIWantToUseGoogleMapApiInternals: true }, this.props.items &&
                    this.props.items.map(function (item, i) { return (React.createElement(Marker_1.default, { key: i, lat: item.lat, lng: item.lng, onClick: function () { return _this.setMapBox(item); } })); }))))));
    };
    return MapComponent;
}(React.Component));
exports.default = react_geolocated_1.geolocated()(MapComponent);
//# sourceMappingURL=MapComponent.js.map