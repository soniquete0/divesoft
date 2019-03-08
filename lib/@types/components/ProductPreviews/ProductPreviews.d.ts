/// <reference types="react" />
interface ProductPreview {
    title: string;
    description: string;
    image: LooseObject;
    url: LooseObject;
    isBkgDark: boolean;
}
export interface ProductPreviewsProps {
    data: {
        title: string;
        subTitle: string;
        productPreviews: ProductPreview[];
    };
}
declare const ProductPreviews: (props: ProductPreviewsProps) => JSX.Element;
export default ProductPreviews;
