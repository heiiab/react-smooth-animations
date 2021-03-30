import apply from '../utils/apply';

export default apply({
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(100%)'
  },
  keyframesName: 'slide-out-down'
});
