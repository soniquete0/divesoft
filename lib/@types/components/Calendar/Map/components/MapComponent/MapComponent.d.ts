import * as React from 'react';
export declare const GoogleMapsApiKey = "AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI";
interface MapComponentProps {
    items: LooseObject;
    controls?: boolean;
    mapCenter: {
        lat: number;
        lng: number;
    };
}
declare const _default: React.ComponentClass<MapComponentProps & import("react-geolocated").ExternalProps, any>;
export default _default;
