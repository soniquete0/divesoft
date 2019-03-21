import * as React from 'react';
import { Header, Footer, Carousel, Calendar, AboutUsHome, VideoGallery, PhotoGallery, NewsAndEvents, GalleryAndVideo, SpecialCarousel } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Faq/Faq").FaqProps) => JSX.Element) | typeof Header | typeof Footer | typeof Carousel | typeof Calendar | typeof AboutUsHome | typeof VideoGallery | typeof PhotoGallery | typeof NewsAndEvents | typeof GalleryAndVideo | typeof SpecialCarousel | React.ComponentClass<import("../../components/ContactsMap/ContactsMap").ContactsMapProps & import("react-geolocated").ExternalProps, any>;
    /***/
    getComponentResource(type: string): typeof resources.faq;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
