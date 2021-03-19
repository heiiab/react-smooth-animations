import * as React from 'react';
import Base from './Base';
import { AnimateProps } from './utils/interfaces';

import FadeIn from './Animations/FadeIn';
import FadeOut from './Animations/FadeOut';
import FadeInUp from './Animations/FadeInUp';
import FadeOutUp from './Animations/FadeOutUp';
import FadeInLeft from './Animations/FadeInLeft';
import FadeInDown from './Animations/FadeInDown';
import FadeInRight from './Animations/FadeInRight';
import FadeOutLeft from './Animations/FadeOutLeft';
import FadeOutDown from './Animations/FadeOutDown';
import FadeOutRight from './Animations/FadeOutRight';

interface AnimateInterface extends React.FC<AnimateProps> {
  FadeIn: typeof FadeIn;
  FadeOut: typeof FadeOut;
  FadeInUp: typeof FadeInUp;
  FadeOutUp: typeof FadeOutUp;
  FadeInLeft: typeof FadeInLeft;
  FadeInDown: typeof FadeInDown;
  FadeInRight: typeof FadeInRight;
  FadeOutLeft: typeof FadeOutLeft;
  FadeOutDown: typeof FadeOutDown;
  FadeOutRight: typeof FadeOutRight;
}

const Animate: AnimateInterface = ({ children, ...restProps }) => <Base {...restProps}>{children}</Base>;

Animate.FadeIn = FadeIn;
Animate.FadeOut = FadeOut;
Animate.FadeInUp = FadeInUp;
Animate.FadeOutUp = FadeOutUp;
Animate.FadeInLeft = FadeInLeft;
Animate.FadeInDown = FadeInDown;
Animate.FadeInRight = FadeInRight;
Animate.FadeOutLeft = FadeOutLeft;
Animate.FadeOutDown = FadeOutDown;
Animate.FadeOutRight = FadeOutRight;

export default Animate;
