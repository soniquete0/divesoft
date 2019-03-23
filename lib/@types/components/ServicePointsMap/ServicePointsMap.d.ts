import React from 'react';
export declare const GoogleMapsApiKey = "AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI";
interface MapItem {
    city: string;
    service: string;
    lat: string;
    lng: string;
    title: string;
    country: string;
    text?: string;
    address?: string;
    storeChief?: string;
    email?: string;
    phone?: string;
    web?: LooseObject;
}
export interface ServicePointsMapProps {
    data: {
        title: string;
        mapItems: MapItem[];
    };
}
export interface ServicePointsMapState {
    countrySelectedValue: string;
    citySelectedValue: string;
    serviceSelectedValue: string;
    mapCenter: {
        lat: number;
        lng: number;
    };
    cities: Array<string>;
    countries: Array<string>;
    services: Array<string>;
    currentCountry: string;
}
declare const _default: React.ComponentClass<ServicePointsMapProps & import("react-geolocated").ExternalProps, any>;
export default _default;
