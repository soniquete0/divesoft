import * as React from 'react';

export interface LoaderProps {}

export function Loader(props: LoaderProps) {
  return (
    <div className={'loader'}>
      <span /> 
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default Loader;