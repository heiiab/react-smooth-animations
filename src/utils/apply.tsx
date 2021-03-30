import * as React from 'react';
import Base from '../Base';
import { AnimateSharedProps, ApplyProps } from './interfaces';

export default (options: ApplyProps) => {
  const Component: React.FC<AnimateSharedProps> = ({ children, ...restProps }) => {
    return (
      <Base {...options} {...restProps}>
        {children}
      </Base>
    );
  }

  return Component;
};
