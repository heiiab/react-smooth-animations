import * as React from 'react';
import warning from 'warning';
import { AnimateProps } from './utils/interfaces';
import uuid from './utils/uuid';
import StyleSheets from './utils/StyleSheets';
import { styleToString, intermediateParser } from './utils';
import useWillMount from './utils/useWillMount';

const Base: React.FC<AnimateProps> = ({
  forward,
  from,
  intermediate,
  to,
  keyframesName = 'rsa',
  duration = 0.5,
  timingFunction = 'ease',
  delay = 0,
  infinite = false,
  animationOnMount = false,
  children,
}) => {
  const childRef = React.useRef<any>();
  const uuidRef = React.useRef<string>(uuid());
  const mounted = React.useRef<boolean>(false);
  const keyframesNameRef = React.useRef<string>(keyframesName);
  const startingStyle = children?.props?.style || {};
  const enterAnimationName = `${keyframesNameRef.current}-animation-enter-${uuidRef.current}`;
  const leaveAnimationName = `${keyframesNameRef.current}-animation-leave-${uuidRef.current}`;
  const animationName = forward ? enterAnimationName : leaveAnimationName;

  if (!animationOnMount && !infinite) {
    duration = mounted.current ? duration : 0;
    delay = mounted.current ? delay : 0;
  }

  const styles = {
    ...startingStyle,
    animation: `${duration}s ${timingFunction} ${delay}s ${infinite ? 'infinite' : ''} forwards ${animationName} `
  };

  useWillMount(() => {
    const styleSheet = StyleSheets.getInstance();
    const fromStylesString = styleToString(from);
    const toStylesString = styleToString(to);
    let intermediateEnterString = '';
    let intermediateLeaveString = '';

    if (intermediate) {
      [intermediateEnterString, intermediateLeaveString] = intermediateParser(intermediate);
    }

    const enterKeyframes = `
      @keyframes ${enterAnimationName} {
        from { ${fromStylesString} }
        ${intermediateEnterString}
        to { ${toStylesString} }
      }
    `;
    const leaveKeyframes = `
      @keyframes ${leaveAnimationName} {
        from { ${toStylesString} }
        ${intermediateLeaveString}
        to { ${fromStylesString} }
      }
    `;

    styleSheet.insertRule(enterKeyframes);
    styleSheet.insertRule(leaveKeyframes);
  });

  React.useEffect(() => {
    getComputedStyle(childRef.current).display === 'inline' &&
      warning(
        false,
        '[react-smooth-animations] will use transform to control element styles, but transform doesn\'t work on most inline elements, see (https://drafts.csswg.org/css-transforms-1/#transformable-element) for more details. You should use other types of element instead.'
      );
    mounted.current = true;
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
