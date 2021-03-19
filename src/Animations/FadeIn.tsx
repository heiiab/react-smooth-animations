import * as React from 'react';
import Base from '../Base';
import { SharedProps } from '../utils/interfaces';

const FadeIn: React.FC<SharedProps> = ({ children, ...restProps }) => {
  return (
    <Base
      {...restProps}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      property="opacity"
    >
      {children}
    </Base>
  );
};

export default FadeIn;
