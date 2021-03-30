import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'translateY(-100%)'
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)'
  },
  keyframesName: 'fade-in-down'
});
