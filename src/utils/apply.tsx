import * as React from 'react';
import Base from '../Base';
import { StateProps, SharedProps } from './interfaces';

export default (state: StateProps, keyframesName: string) => {
  const Component: React.FC<SharedProps> = ({ children, ...restProps }) => {
    return (
      <Base {...restProps} {...state} keyframesName={keyframesName}>
        {children}
      </Base>
    );
  }

  return Component;
};
