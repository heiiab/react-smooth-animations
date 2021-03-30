import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transform: 'scale(0)'
  },
  keyframesName: 'zoom-out'
});
