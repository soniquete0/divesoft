/// <reference types="react" />
interface File {
    title: string;
    img: LooseObject;
    url: LooseObject;
    urlText: string;
}
export interface DownloadsProps {
    data: {
        title: string;
        description: string;
        files: File[];
    };
}
declare const Downloads: (props: DownloadsProps) => JSX.Element;
export default Downloads;
