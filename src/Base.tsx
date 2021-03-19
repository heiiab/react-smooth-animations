import * as React from 'react';
import { AnimateProps } from './utils/interfaces';

const Base: React.FC<AnimateProps> = ({
  forward,
  from,
  to,
  property = 'all',
  duration = 0.5,
  timingFunction = 'linear',
  delay = 0,
  children,
}) => {
  const startingStyle = children?.props?.style || {};
  const additionalStyle = forward ? to : from;
  const transitionStyle = {
    transition: `${property} ${duration}s ${timingFunction} ${delay}s`,
  };
  const styles = {
    ...startingStyle,
    ...additionalStyle,
    ...transitionStyle,
  };

  return React.cloneElement(
    React.Children.only(children),
    { style: styles },
  );
};

export default Base;
