import * as React from 'react';
import { TimingFunction, Intermediate } from './types';

export interface SharedProps {
  forward: boolean;
  duration?: number;
  keyframesName?: string;
  timingFunction?: TimingFunction;
  delay?: number;
  infinite?: boolean;
  animationOnMount?: boolean;
  children: React.ReactElement;
}

export interface StateProps {
  from: React.CSSProperties;
  intermediate?: Intermediate;
  to: React.CSSProperties;
}

export interface AnimateProps extends SharedProps, StateProps {}
