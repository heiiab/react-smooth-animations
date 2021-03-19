import * as React from 'react';
import Base from '../Base';
import { SharedProps } from '../utils/interfaces';

const FadeOutRight: React.FC<SharedProps> = ({ children, ...restProps }) => {
  return (
    <Base
      {...restProps}
      from={{ opacity: 1 }}
      to={{ opacity: 0, transform: 'translateX(100%)' }}
    >
      {children}
    </Base>
  );
};

export default FadeOutRight;
