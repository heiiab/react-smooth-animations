import apply from '../utils/apply';

export default apply(
  {
    from: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    to: {
      opacity: 0,
      transform: 'translateY(-100%)'
    }
  },
  'fade-out-up'
);
