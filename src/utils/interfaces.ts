import { TimingFunction } from './types';

export interface SharedProps {
  forward: boolean;
  duration?: number;
  timingFunction?: TimingFunction;
  delay?: number;
  children: React.ReactElement;
}

export interface TransitionProps {
  from: React.CSSProperties;
  to: React.CSSProperties;
}

export interface AnimateProps extends SharedProps, TransitionProps {}
