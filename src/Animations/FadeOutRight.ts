import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'translateX(0)'
  },
  to: {
    opacity: 0,
    transform: 'translateX(100%)'
  },
  keyframesName: 'fade-out-right'
});
