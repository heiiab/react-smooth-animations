import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'scale(1)'
  },
  intermediate: {
    20: {
      transform: 'scale(0.95)'
    },
    40: {
      transform: 'scale(1.05)'
    },
    60: {
      transform: 'scale(0.8)'
    },
    80: {
      transform: 'scale(1.2)'
    }
  },
  to: {
    opacity: 0,
    transform: 'scale(0)'
  },
  duration: 1,
  timingFunction: 'ease-in',
  keyframesName: 'bounce-out'
});
