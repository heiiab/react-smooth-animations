import React from "react";

export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type TimingFunction = LiteralUnion<
  'linear' |
  'ease' |
  'ease-in' |
  'ease-out' |
  'ease-in-out' |
  'step-start' |
  'step-end' |
  'start' |
  'end' |
  'jump-start' |
  'jump-end' |
  'jump-none' |
  'jump-both' |
  'inherit' |
  'initial' |
  'unset'
>;

// percentage, key: 0 - 100
export type Intermediate = Array<React.CSSProperties & { percentage: number }> | {
  [key: number]: React.CSSProperties
}
