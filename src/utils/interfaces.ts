import * as React from 'react';
import { TimingFunction } from './types';

export interface SharedProps {
  forward: boolean;
  duration?: number;
  keyframesName?: string;
  timingFunction?: TimingFunction;
  delay?: number;
  children: React.ReactElement;
}

export interface StateProps {
  from: React.CSSProperties;
  intermediate?: Array<React.CSSProperties>;
  to: React.CSSProperties;
}

export interface AnimateProps extends SharedProps, StateProps {}
