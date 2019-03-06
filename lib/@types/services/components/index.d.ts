/// <reference types="react" />
import { Header, Footer } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Header | typeof Footer | (() => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.header;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
