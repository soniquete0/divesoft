/// <reference types="react" />
import { Header, Footer, AboutUs, Carousel, NewsAndEvents } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Header | typeof Footer | typeof Carousel | ((props: import("../../components/ProductPreviews/ProductPreviews").ProductPreviewsProps) => JSX.Element) | typeof NewsAndEvents | typeof AboutUs;
    /***/
    getComponentResource(type: string): typeof resources.header;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
