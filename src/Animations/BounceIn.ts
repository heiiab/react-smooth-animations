import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'scale(0)'
  },
  intermediate: {
    20: {
      transform: 'scale(1.2)'
    },
    40: {
      transform: 'scale(0.8)'
    },
    60: {
      transform: 'scale(1.05)'
    },
    80: {
      transform: 'scale(0.95)'
    }
  },
  to: {
    opacity: 1,
    transform: 'scale(1)'
  },
  duration: 1,
  timingFunction: 'ease-out',
  keyframesName: 'bounce-in'
});
