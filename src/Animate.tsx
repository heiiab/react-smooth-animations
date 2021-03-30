import * as React from 'react';
import Base from './Base';
import { AnimateProps } from './utils/interfaces';

import FadeIn from './animations/FadeIn';
import FadeInUp from './animations/FadeInUp';
import FadeInLeft from './animations/FadeInLeft';
import FadeInDown from './animations/FadeInDown';
import FadeInRight from './animations/FadeInRight';

import FadeOut from './animations/FadeOut';
import FadeOutUp from './animations/FadeOutUp';
import FadeOutLeft from './animations/FadeOutLeft';
import FadeOutDown from './animations/FadeOutDown';
import FadeOutRight from './animations/FadeOutRight';

import SlideInUp from './animations/SlideInUp';
import SlideInLeft from './animations/SlideInLeft';
import SlideInDown from './animations/SlideInDown';
import SlideInRight from './animations/SlideInRight';

import SlideOutUp from './animations/SlideOutUp';
import SlideOutLeft from './animations/SlideOutLeft';
import SlideOutDown from './animations/SlideOutDown';
import SlideOutRight from './animations/SlideOutRight';

import ZoomIn from './animations/ZoomIn';
import ZoomInUp from './animations/ZoomInUp';
import ZoomInLeft from './animations/ZoomInLeft';
import ZoomInDown from './animations/ZoomInDown';
import ZoomInRight from './animations/ZoomInRight';

import ZoomOut from './animations/ZoomOut';
import ZoomOutUp from './animations/ZoomOutUp';
import ZoomOutLeft from './animations/ZoomOutLeft';
import ZoomOutDown from './animations/ZoomOutDown';
import ZoomOutRight from './animations/ZoomOutRight';

import BounceIn from './animations/BounceIn';
import BounceInUp from './animations/BounceInUp';
import BounceInLeft from './animations/BounceInLeft';
import BounceInDown from './animations/BounceInDown';
import BounceInRight from './animations/BounceInRight';

import BounceOut from './animations/BounceOut';
import BounceOutUp from './animations/BounceOutUp';
import BounceOutLeft from './animations/BounceOutLeft';
import BounceOutDown from './animations/BounceOutDown';
import BounceOutRight from './animations/BounceOutRight';

import FlipInUp from './animations/FlipInUp';
import FlipInLeft from './animations/FlipInLeft';
import FlipInDown from './animations/FlipInDown';
import FlipInRight from './animations/FlipInRight';

import FlipOutUp from './animations/FlipOutUp';
import FlipOutLeft from './animations/FlipOutLeft';
import FlipOutDown from './animations/FlipOutDown';
import FlipOutRight from './animations/FlipOutRight';

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

  SlideInUp: typeof SlideInUp;
  SlideInLeft: typeof SlideInLeft;
  SlideInDown: typeof SlideInDown;
  SlideInRight: typeof SlideInRight;

  SlideOutUp: typeof SlideOutUp;
  SlideOutLeft: typeof SlideOutLeft;
  SlideOutDown: typeof SlideOutDown;
  SlideOutRight: typeof SlideOutRight;

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

  BounceIn: typeof BounceIn;
  BounceInUp: typeof BounceInUp;
  BounceInLeft: typeof BounceInLeft;
  BounceInDown: typeof BounceInDown;
  BounceInRight: typeof BounceInRight;

  BounceOut: typeof BounceOut;
  BounceOutUp: typeof BounceOutUp;
  BounceOutLeft: typeof BounceOutLeft;
  BounceOutDown: typeof BounceOutDown;
  BounceOutRight: typeof BounceOutRight;

  FlipInUp: typeof FlipInUp;
  FlipInLeft: typeof FlipInLeft;
  FlipInDown: typeof FlipInDown;
  FlipInRight: typeof FlipInRight;

  FlipOutUp: typeof FlipOutUp;
  FlipOutLeft: typeof FlipOutLeft;
  FlipOutDown: typeof FlipOutDown;
  FlipOutRight: typeof FlipOutRight;
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

Animate.SlideInUp = SlideInUp;
Animate.SlideInLeft = SlideInLeft;
Animate.SlideInDown = SlideInDown;
Animate.SlideInRight = SlideInRight;

Animate.SlideOutUp = SlideOutUp;
Animate.SlideOutLeft = SlideOutLeft;
Animate.SlideOutDown = SlideOutDown;
Animate.SlideOutRight = SlideOutRight;

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

Animate.BounceIn = BounceIn;
Animate.BounceInUp = BounceInUp;
Animate.BounceInLeft = BounceInLeft;
Animate.BounceInDown = BounceInDown;
Animate.BounceInRight = BounceInRight;

Animate.BounceOut = BounceOut;
Animate.BounceOutUp = BounceOutUp;
Animate.BounceOutLeft = BounceOutLeft;
Animate.BounceOutDown = BounceOutDown;
Animate.BounceOutRight = BounceOutRight;

Animate.FlipInUp = FlipInUp;
Animate.FlipInLeft = FlipInLeft;
Animate.FlipInDown = FlipInDown;
Animate.FlipInRight = FlipInRight;

Animate.FlipOutUp = FlipOutUp;
Animate.FlipOutLeft = FlipOutLeft;
Animate.FlipOutDown = FlipOutDown;
Animate.FlipOutRight = FlipOutRight;

export default Animate;
