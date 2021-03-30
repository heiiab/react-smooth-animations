import apply from '../utils/apply';

export default apply({
  from: {
    transform: 'translateX(0)'
  },
  to: {
    transform: 'translateX(100%)'
  },
  keyframesName: 'slide-out-right'
});
