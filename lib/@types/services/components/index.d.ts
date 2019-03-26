import * as React from 'react';
import { Header, Footer, Carousel, Calendar, AboutUsHome, VideoGallery, PhotoGallery, NewsAndEvents, GalleryAndVideo, SpecialCarousel } from '../../components';
import * as resources from './resources';
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Faq/Faq").FaqProps) => JSX.Element) | ((props: import("../../components/News/News").NewsProps) => JSX.Element) | ((props: import("../../components/Hero/Hero").HeroProps) => JSX.Element) | typeof Header | typeof Footer | typeof Carousel | typeof Calendar | ((props: import("../../components/Firmwares/Firmwares").FirmwaresProps) => JSX.Element) | ((props: import("../../components/Downloads/Downloads").DownloadsProps) => JSX.Element) | React.ComponentClass<import("../../components/ContactsMap/ContactsMap").ContactsMapProps & import("react-geolocated").ExternalProps, any> | typeof AboutUsHome | ((props: import("../../components/ListOfLinks/ListOfLinks").ListOfLinksProps) => JSX.Element) | typeof VideoGallery | typeof PhotoGallery | ((props: import("../../components/ProductsMenu/ProductsMenu").ProductsMenuProps) => JSX.Element) | ((props: import("../../components/Testimonials/Testimonials").TestimonialsProps) => JSX.Element) | typeof NewsAndEvents | ((props: import("../../components/ContactColumns/ContactColumns").ContactColumnsProps) => JSX.Element) | typeof GalleryAndVideo | ((props: import("../../components/ProductsPreview/ProductsPreview").ProductsPreviewProps) => JSX.Element) | typeof SpecialCarousel | ((props: import("../../components/AboutLeftPicture/AboutLeftPicture").AboutLeftPictureProps) => JSX.Element) | React.ComponentClass<import("../../components/ServicePointsMap/ServicePointsMap").ServicePointsMapProps & import("react-geolocated").ExternalProps, any> | ((props: import("../../components/ProductComponents/ProductComponents").ProductComponentsProps) => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.faq;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
