import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'translateX(-100%)'
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)'
  },
  keyframesName: 'fade-in-left',
});
