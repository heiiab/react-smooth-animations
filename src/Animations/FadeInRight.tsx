import * as React from 'react';
import Base from '../Base';
import { SharedProps } from '../utils/interfaces';

const FadeInRight: React.FC<SharedProps> = ({ children, ...restProps }) => {
  return (
    <Base
      {...restProps}
      from={{ opacity: 0, transform: 'translateX(100%)' }}
      to={{ opacity: 1, transform: 'none' }}
    >
      {children}
    </Base>
  );
};

export default FadeInRight;
