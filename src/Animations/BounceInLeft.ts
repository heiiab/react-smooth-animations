import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'translateX(-500%)'
  },
  intermediate: {
    20: {
      transform: 'translateX(40%)'
    },
    40: {
      transform: 'translateX(-40%)'
    },
    60: {
      transform: 'translateX(10%)'
    },
    80: {
      transform: 'translateX(-10%)'
    }
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)'
  },
  duration: 1,
  timingFunction: 'ease-out',
  keyframesName: 'bounce-in-left'
});
