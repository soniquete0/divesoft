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
      <p style={{ margin: '0', padding: '0 10px' }}>Menu</p>
    </div>
  );
};

export default Hamburger;