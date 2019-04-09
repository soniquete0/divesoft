import * as React from 'react';
import Link from '../Link';

export interface ButtonProps {
  classes?: string;
  children: string;
  url?: LooseObject;
}

const Button = (props: ButtonProps) => {
  // Button with link
  if (props.url) {
    return (
      <Link className={`btn ${props.classes}`} {...props.url}>
        {props.children}
      </Link>
    );
  } else {
    return (
      // button with no link
      <button className={`btn ${props.classes}`}>
        {props.children}
      </button>
    );
  }
};
export default Button;