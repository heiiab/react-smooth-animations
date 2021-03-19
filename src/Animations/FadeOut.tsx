import * as React from 'react';
import Base from '../Base';
import { SharedProps } from '../utils/interfaces';

const FadeOut: React.FC<SharedProps> = ({ children, ...restProps }) => {
  return (
    <Base
      {...restProps}
      from={{ opacity: 1 }}
      to={{ opacity: 0 }}
      property="opacity"
    >
      {children}
    </Base>
  );
};

export default FadeOut;
