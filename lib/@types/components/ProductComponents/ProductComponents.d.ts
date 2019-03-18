/// <reference types="react" />
interface Component {
    title: string;
    description: string;
    image: LooseObject;
    url: LooseObject;
}
export interface ProductComponentsProps {
    data: {
        title: string;
        description: string;
        components: Component[];
    };
}
declare const ProductComponents: (props: ProductComponentsProps) => JSX.Element;
export default ProductComponents;
