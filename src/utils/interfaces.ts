import React from "react";

export interface SharedProps {
  forward: boolean;
  duration?: number;
  timingFunction?: string;
  delay?: number;
  children: React.ReactElement;
}

export interface AnimateProps extends SharedProps {
  from: React.CSSProperties;
  to: React.CSSProperties;
  property?: string;
}
