import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'perspective(500px) rotateX(-90deg)'
  },
  intermediate: {
    40: {
      transform: 'perspective(500px) rotateX(30deg)'
    },
    60: {
      transform: 'perspective(500px) rotateX(-15deg)'
    },
    80: {
      transform: 'perspective(500px) rotateX(5deg)'
    },
  },
  to: {
    opacity: 1,
    transform: 'perspective(500px) rotateX(0)'
  },
  duration: 1,
  timingFunction: 'ease-out',
  keyframesName: 'flip-in-up'
});
