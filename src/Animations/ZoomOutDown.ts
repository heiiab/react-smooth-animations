import apply from '../utils/apply';

export default apply(
  {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
      transform: 'translateY(100%) scale(0)'
    }
  },
  'zoom-out-down'
);
