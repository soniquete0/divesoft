import * as React from 'react';

export interface HamburgerProps {
  active: boolean;
  onClick: Function;
}

const Hamburger = (props: HamburgerProps) => {
  return (
    <div className={`hamburgerHolder ${props.active ? 'active' : ''}`} onClick={() => props.onClick()}>
      <div className={`hamburger`}>
      <div />
      </div>
      <div className={`hamburgerActive`}>
      <div />
      </div>
    </div>
  );
};

export default Hamburger;
