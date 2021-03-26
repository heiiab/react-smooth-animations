import apply from '../utils/apply';

export default apply(
  {
    from: {
      opacity: 0,
      transform: 'translateX(-100%) scale(0)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0) scale(1)'
    }
  },
  'zoom-in-left'
);
