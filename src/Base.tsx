import * as React from 'react';
import warning from 'warning';
import { AnimateProps } from './utils/interfaces';
import uuid from './utils/uuid';

const Base: React.FC<AnimateProps> = ({
  forward,
  from,
  intermediate,
  to,
  keyframesName = 'customize',
  duration = 0.5,
  timingFunction = 'ease',
  delay = 0,
  children,
}) => {
  const childRef = React.useRef<any>();
  const uuidRef = React.useRef<string>(uuid());
  const keyframesNameRef = React.useRef<string>(keyframesName);
  // override the "display" value of child
  const childDisplay = React.useRef<string>('');
  const startingStyle = children?.props?.style || {};
  const enterAnimationName = `${keyframesNameRef.current}-animation-enter-${uuidRef.current}`;
  const leaveAnimationName = `${keyframesNameRef.current}-animation-leave-${uuidRef.current}`;
  const [additionalStyle, setAdditionalStyle] = React.useState<React.CSSProperties>();
  const styles = {
    ...startingStyle,
    ...additionalStyle,
    ...(childDisplay.current ? { display: childDisplay.current } : {}),
  };

  React.useEffect(() => {
    setAdditionalStyle({
      animation: `${forward ? enterAnimationName : leaveAnimationName} ${duration}s ${timingFunction} ${delay}s forwards`
    });
  }, [forward]);

  React.useEffect(() => {
    if (getComputedStyle(childRef.current).display === 'inline') {
      childDisplay.current = 'inline-block';
      warning(
        false,
        '[react-smooth-animations] will use transform to control element styles, but transform doesn\'t work on most inline elements, see (https://drafts.csswg.org/css-transforms-1/#transformable-element) for more details. You should use other types of element instead.'
      );
    }
  }, []);

  React.useEffect(() => {
    const fromStylesString = Object.entries(from).map(([key, value]) => `${key}:${value}`).join(';');
    const toStylesString = Object.entries(to).map(([key, value]) => `${key}:${value}`).join(';');

    const enterKeyframes = `
      @keyframes ${enterAnimationName} {
        from { ${fromStylesString} }
        to { ${toStylesString} }
      }
    `;
    const leaveKeyframes = `
      @keyframes ${leaveAnimationName} {
        from { ${toStylesString} }
        to { ${fromStylesString} }
      }
    `;
    const style = document.createElement('style');

    style.innerHTML = enterKeyframes + leaveKeyframes;
    document.getElementsByTagName('head')[0].appendChild(style);
  }, []);

  return React.cloneElement(
    React.Children.only(children),
    {
      ref: childRef,
      style: styles
    },
  );
};

export default Base;
