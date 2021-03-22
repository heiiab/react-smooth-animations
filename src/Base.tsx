import * as React from 'react';
import { AnimateProps } from './utils/interfaces';

const Base: React.FC<AnimateProps> = ({
  forward,
  from,
  to,
  duration = 0.5,
  timingFunction = 'ease',
  delay = 0,
  children,
}) => {
  const startingStyle = children?.props?.style || {};
  const additionalStyle = forward ? to : from;
  const transitionStyle = {
    transition: `all ${duration}s ${timingFunction} ${delay}s`,
  };
  const styles = {
    ...startingStyle,
    ...additionalStyle,
    ...transitionStyle,
  };

  console.log('entered animation <---');

  return React.cloneElement(
    React.Children.only(children),
    { style: styles },
  );
};

export default Base;
