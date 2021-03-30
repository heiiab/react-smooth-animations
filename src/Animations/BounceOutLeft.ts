import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'translateX(0)'
  },
  intermediate: {
    20: {
      transform: 'translateX(-10%)'
    },
    40: {
      transform: 'translateX(10%)'
    },
    60: {
      transform: 'translateX(-40%)'
    },
    80: {
      transform: 'translateX(40%)'
    }
  },
  to: {
    opacity: 0,
    transform: 'translateX(-500%)'
  },
  duration: 1,
  timingFunction: 'ease-in',
  keyframesName: 'bounce-out-left'
});
