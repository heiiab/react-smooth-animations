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
