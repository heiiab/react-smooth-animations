import * as React from 'react';
import Base from '../Base';
import { SharedProps } from '../utils/interfaces';

const FadeOutDown: React.FC<SharedProps> = ({ children, ...restProps }) => {
  return (
    <Base
      {...restProps}
      from={{ opacity: 1 }}
      to={{ opacity: 0, transform: 'translateY(100%)' }}
    >
      {children}
    </Base>
  );
};

export default FadeOutDown;
