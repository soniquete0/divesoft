declare const MapStlyes: ({
    'elementType': string;
    'stylers': ({
        'color': string;
        'saturation'?: undefined;
    } | {
        'saturation': number;
        'color'?: undefined;
    })[];
    'featureType'?: undefined;
} | {
    'featureType': string;
    'elementType': string;
    'stylers': {
        'color': string;
    }[];
} | {
    'featureType': string;
    'elementType': string;
    'stylers': {
        'visibility': string;
    }[];
} | {
    'featureType': string;
    'stylers': {
        'visibility': string;
    }[];
    'elementType'?: undefined;
})[];
export default MapStlyes;
