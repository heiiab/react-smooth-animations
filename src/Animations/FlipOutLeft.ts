import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 1,
    transform: 'perspective(500px) rotateY(0)'
  },
  intermediate: {
    20: {
      transform: 'perspective(500px) rotateY(5deg)'
    },
    40: {
      transform: 'perspective(500px) rotateY(-15deg)'
    },
    60: {
      transform: 'perspective(500px) rotateY(30deg)'
    }
  },
  to: {
    opacity: 0,
    transform: 'perspective(500px) rotateY(-90deg)'
  },
  duration: 1,
  timingFunction: 'ease-in',
  keyframesName: 'flip-out-left'
});
