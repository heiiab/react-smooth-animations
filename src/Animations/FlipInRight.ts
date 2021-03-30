import apply from '../utils/apply';

export default apply({
  from: {
    opacity: 0,
    transform: 'perspective(500px) rotateY(-90deg)'
  },
  intermediate: {
    40: {
      transform: 'perspective(500px) rotateY(30deg)'
    },
    60: {
      transform: 'perspective(500px) rotateY(-15deg)'
    },
    80: {
      transform: 'perspective(500px) rotateY(5deg)'
    }
  },
  to: {
    opacity: 1,
    transform: 'perspective(500px) rotateY(0)'
  },
  duration: 1,
  timingFunction: 'ease-out',
  keyframesName: 'flip-in-right'
});
