import * as React from 'react';
import Base from '../Base';
import { TransitionProps, SharedProps } from './interfaces';

export default (transition: TransitionProps) => {
  const Component: React.FC<SharedProps> = ({ children, ...restProps }) => {
    return (
      <Base {...restProps} {...transition}>
        {children}
      </Base>
    );
  }

  return Component;
};
