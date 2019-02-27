/// <reference types="react" />
export interface ButtonProps {
    classes?: string;
    children: string;
    noArrow?: boolean;
    url?: LooseObject;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
