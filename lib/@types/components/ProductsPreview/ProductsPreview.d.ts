/// <reference types="react" />
interface Product {
    title: string;
    description: string;
    img: LooseObject;
    url: LooseObject;
}
export interface ProductsPreviewProps {
    data: {
        products: Product[];
    };
}
declare const ProductsPreview: (props: ProductsPreviewProps) => JSX.Element;
export default ProductsPreview;
