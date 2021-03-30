import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  intermediate: {
    20: {
      transform: 'translateY(-15%)'
    },
    40: {
      transform: 'translateY(15%)'
    },
    60: {
      transform: 'translateY(-60%)'
    },
    80: {
      transform: 'translateY(60%)'
    }
  },
  to: {
    opacity: 0,
    transform: 'translateY(-500%)'
  },
  duration: 1,
  timingFunction: 'ease-in',
  keyframesName: 'bounce-out-up'
});
