import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'perspective(500px) rotateX(0)'
  },
  intermediate: {
    20: {
      transform: 'perspective(500px) rotateX(5deg)'
    },
    40: {
      transform: 'perspective(500px) rotateX(-15deg)'
    },
    60: {
      transform: 'perspective(500px) rotateX(30deg)'
    }
  },
  to: {
    opacity: 0,
    transform: 'perspective(500px) rotateX(-90deg)'
  },
  duration: 1,
  timingFunction: 'ease-in',
  keyframesName: 'flip-out-down'
});
