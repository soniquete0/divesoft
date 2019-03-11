/// <reference types="react" />
interface Product {
    title: string;
    description: string;
    image: LooseObject;
    url: LooseObject;
    isBkgDark: boolean;
}
export interface ProductsMenuProps {
    data: {
        title: string;
        subTitle: string;
        products: Product[];
    };
}
declare const ProductsMenu: (props: ProductsMenuProps) => JSX.Element;
export default ProductsMenu;
