/// <reference types="react" />
import { Header, Footer, Carousel, AboutUsHome, NewsAndEvents, GalleryAndVideo, SpecialCarousel } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Hero/Hero").HeroProps) => JSX.Element) | typeof Header | typeof Footer | typeof Carousel | ((props: import("../../components/Downloads/Downloads").DownloadsProps) => JSX.Element) | typeof AboutUsHome | ((props: import("../../components/ProductsMenu/ProductsMenu").ProductsMenuProps) => JSX.Element) | typeof NewsAndEvents | typeof GalleryAndVideo | ((props: import("../../components/ProductsPreview/ProductsPreview").ProductsPreviewProps) => JSX.Element) | typeof SpecialCarousel | ((props: import("../../components/AboutLeftPicture/AboutLeftPicture").AboutLeftPictureProps) => JSX.Element) | ((props: import("../../components/ProductComponents/ProductComponents").ProductComponentsProps) => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.hero;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
