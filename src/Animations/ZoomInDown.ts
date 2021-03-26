import apply from '../utils/apply';

export default apply(
  {
    from: {
      opacity: 0,
      transform: 'translateY(-100%) scale(0)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0) scale(1)'
    }
  },
  'zoom-in-down'
);
