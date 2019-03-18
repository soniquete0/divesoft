import * as React from 'react';
export declare const GoogleMapsApiKey = "AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI";
interface MapComponentProps {
    items: LooseObject;
    title?: string;
    controls?: boolean;
}
declare const _default: React.ComponentClass<MapComponentProps & import("react-geolocated").ExternalProps, any>;
export default _default;
