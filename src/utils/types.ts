export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type TimingFunction = LiteralUnion<
  '-moz-initial' |
  'linear' |
  'ease' |
  'ease-in' |
  'ease-out' |
  'ease-in-out' |
  'step-start' |
  'step-end' |
  'initial' |
  'inherit' |
  'unset' |
  'revert'
>;

