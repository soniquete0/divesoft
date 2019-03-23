/// <reference types="react" />
import Link from '../../partials/Link';
interface Link {
    title: string;
    url: LooseObject;
}
export interface ListOfLinksProps {
    data: {
        links: Link[];
    };
}
declare const ListOfLinks: (props: ListOfLinksProps) => JSX.Element;
export default ListOfLinks;
