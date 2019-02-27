import * as React from 'react';
import Link from '../Link';

export interface ButtonProps {
  classes?: string;
  children: string;
  noArrow?: boolean;
  url?: LooseObject;
}

const Button = (props: ButtonProps) => {
  // Button with link
  if (props.url) {
    return (
      <Link className={`btn ${props.classes}`} url={props.url && props.url.url}>
        {props.children}
        {!props.noArrow && <span className="arrow" />}
      </Link>
    );
  } else {
    return (
      // button with no link
      <button className={`btn ${props.classes}`}>
        {props.children}
        {!props.noArrow && <span className="arrow" />}
      </button>
    );
  }
};
export default Button;