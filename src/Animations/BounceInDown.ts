import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'translateY(-500%)'
  },
  intermediate: {
    20: {
      transform: 'translateY(60%)'
    },
    40: {
      transform: 'translateY(-60%)'
    },
    60: {
      transform: 'translateY(15%)'
    },
    80: {
      transform: 'translateY(-15%)'
    }
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  duration: 1,
  timingFunction: 'ease-out',
  keyframesName: 'bounce-in-down'
});
