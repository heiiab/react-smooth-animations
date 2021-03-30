import * as React from 'react';
import { TimingFunction, Intermediate } from './types';

interface AnimateBaseProps {
  duration?: number;
  keyframesName?: string;
  timingFunction?: TimingFunction;
  delay?: number;
  infinite?: boolean;
  animationOnMount?: boolean;
}

export interface AnimateSharedProps extends AnimateBaseProps {
  forward: boolean;
  children: React.ReactElement;
}

interface AnimateStateProps {
  from: React.CSSProperties;
  intermediate?: Intermediate;
  to: React.CSSProperties;
}

export interface AnimateProps extends AnimateSharedProps, AnimateStateProps {}

export interface ApplyProps extends AnimateBaseProps, AnimateStateProps {}
