import * as React from 'react';
import Base from './Base';
import { AnimateProps } from './utils/interfaces';

import FadeIn from './Animations/FadeIn';
import FadeInUp from './Animations/FadeInUp';
import FadeInLeft from './Animations/FadeInLeft';
import FadeInDown from './Animations/FadeInDown';
import FadeInRight from './Animations/FadeInRight';

import FadeOut from './Animations/FadeOut';
import FadeOutUp from './Animations/FadeOutUp';
import FadeOutLeft from './Animations/FadeOutLeft';
import FadeOutDown from './Animations/FadeOutDown';
import FadeOutRight from './Animations/FadeOutRight';

import ZoomIn from './Animations/ZoomIn';
import ZoomInUp from './Animations/ZoomInUp';
import ZoomInLeft from './Animations/ZoomInLeft';
import ZoomInDown from './Animations/ZoomInDown';
import ZoomInRight from './Animations/ZoomInRight';

import ZoomOut from './Animations/ZoomOut';
import ZoomOutUp from './Animations/ZoomOutUp';
import ZoomOutLeft from './Animations/ZoomOutLeft';
import ZoomOutDown from './Animations/ZoomOutDown';
import ZoomOutRight from './Animations/ZoomOutRight';

interface AnimateInterface extends React.FC<AnimateProps> {
  FadeIn: typeof FadeIn;
  FadeInUp: typeof FadeInUp;
  FadeInLeft: typeof FadeInLeft;
  FadeInDown: typeof FadeInDown;
  FadeInRight: typeof FadeInRight;

  FadeOut: typeof FadeOut;
  FadeOutUp: typeof FadeOutUp;
  FadeOutLeft: typeof FadeOutLeft;
  FadeOutDown: typeof FadeOutDown;
  FadeOutRight: typeof FadeOutRight;

  ZoomIn: typeof ZoomIn;
  ZoomInUp: typeof ZoomInUp;
  ZoomInLeft: typeof ZoomInLeft;
  ZoomInDown: typeof ZoomInDown;
  ZoomInRight: typeof ZoomInRight;

  ZoomOut: typeof ZoomOut;
  ZoomOutUp: typeof ZoomOutUp;
  ZoomOutLeft: typeof ZoomOutLeft;
  ZoomOutDown: typeof ZoomOutDown;
  ZoomOutRight: typeof ZoomOutRight;
}

const Animate: AnimateInterface = ({ children, ...restProps }) => <Base {...restProps}>{children}</Base>;

Animate.FadeIn = FadeIn;
Animate.FadeInUp = FadeInUp;
Animate.FadeInLeft = FadeInLeft;
Animate.FadeInDown = FadeInDown;
Animate.FadeInRight = FadeInRight;

Animate.FadeOut = FadeOut;
Animate.FadeOutUp = FadeOutUp;
Animate.FadeOutLeft = FadeOutLeft;
Animate.FadeOutDown = FadeOutDown;
Animate.FadeOutRight = FadeOutRight;

Animate.ZoomIn = ZoomIn;
Animate.ZoomInUp = ZoomInUp;
Animate.ZoomInLeft = ZoomInLeft;
Animate.ZoomInDown = ZoomInDown;
Animate.ZoomInRight = ZoomInRight;

Animate.ZoomOut = ZoomOut;
Animate.ZoomOutUp = ZoomOutUp;
Animate.ZoomOutLeft = ZoomOutLeft;
Animate.ZoomOutDown = ZoomOutDown;
Animate.ZoomOutRight = ZoomOutRight;

export default Animate;
