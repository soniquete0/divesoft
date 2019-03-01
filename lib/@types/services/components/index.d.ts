/// <reference types="react" />
import { Header } from '../../components';
import * as resources from './resources';
/**
 *
 */
declare class ComponentsService {
    Types: LooseObject<string>;
    /***/
    getAllowedTypes(): string[];
    /***/
    getComponent(type: string): typeof Header | (() => JSX.Element);
    /***/
    getComponentResource(type: string): typeof resources.header;
    getForm(type: string): () => JSX.Element;
}
export default ComponentsService;
