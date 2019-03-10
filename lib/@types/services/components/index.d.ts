/// <reference types="react" />
import { Header, Footer, Carousel, AboutUsHome, NewsAndEvents } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): ((props: import("../../components/Hero/Hero").HeroProps) => JSX.Element) | typeof Header | typeof Footer | typeof Carousel | typeof AboutUsHome | typeof NewsAndEvents | ((props: import("../../components/ProductPreviews/ProductPreviews").ProductPreviewsProps) => JSX.Element) | ((props: import("../../components/AboutRightPicture/AboutRightPicture").AboutRightPictureProps) => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.hero;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
