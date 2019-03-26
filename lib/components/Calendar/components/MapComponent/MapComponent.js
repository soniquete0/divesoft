"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _reactGeolocated = require("react-geolocated");

var _Marker = _interopRequireDefault(require("../Marker"));

var _MapStyles = _interopRequireDefault(require("./MapStyles"));

var _Controls = _interopRequireDefault(require("./Controls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var MapComponent =
/** @class */
function (_super) {
  __extends(MapComponent, _super);

  function MapComponent(props) {
    return _super.call(this, props) || this;
  }

  MapComponent.prototype.render = function () {
    var defaultCenter = {
      lat: 50.08804,
      lng: 14.42076
    };
    return React.createElement("div", {
      style: {
        width: '100%',
        position: 'relative'
      }
    }, this.props.title ? React.createElement("h2", {
      style: {
        paddingBottom: '30px',
        textAlign: 'center'
      }
    }, this.props.title) : '', this.props.controls ? React.createElement(_Controls.default, {
      items: this.props.items
    }) : '', React.createElement("section", {
      className: 'map'
    }, this.props.items && React.createElement(_googleMapReact.default, {
      bootstrapURLKeys: {
        key: GoogleMapsApiKey
      },
      defaultCenter: defaultCenter,
      defaultZoom: 3,
      options: {
        scrollwheel: false,
        styles: _MapStyles.default
      },
      yesIWantToUseGoogleMapApiInternals: true
    }, this.props.items && this.props.items.map(function (item, i) {
      return React.createElement(_Marker.default, {
        key: i,
        lat: item.lat,
        lng: item.lng
      });
    }))));
  };

  return MapComponent;
}(React.Component);

var _default = (0, _reactGeolocated.geolocated)()(MapComponent);

exports.default = _default;