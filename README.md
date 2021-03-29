# react-smooth-animations

✨ A collection of animations for React.

English | [简体中文](./README-zh_CN.md)

## Install

```bash
npm install react-smooth-animations
```

or

```bash
yarn add react-smooth-animations
```

## Usage

```jsx
import React from 'react';
import Animate from 'react-smooth-animations';

const App = () => {
  const [forward, setForward] = React.useState(false);

  return (
    <div>
      <button onClick={() => setForward(!forward)}>Toggle</button>
      <Animate
        forward={forward}
        from={{ opacity: 0, transform: 'translateY(-20px) rotate(-45deg)' }}
        intermediate={{
          30: {
            opacity: 1
          },
          /**
           * 60: { ... },
           * 70: { ... }
           */
        }}
        /**
         * or
         * intermediate={[
         *  { percentage: 30, opacity: 1 },
         *  { percentage: 60, ... }
         * ]}
        */
        to={{ opacity: 0, transform: 'translateY(10px) rotate(-45deg)' }}
        duration={1.5}
        timingFunction="ease-in-out"
      >
        <span style={{ display: 'inline-block' }}>Custom animation</span>
      </Animate>
    </div>
  );
}
```

```jsx
import React from 'react';
import Animate from 'react-smooth-animations';

const App = () => {
  const [forward, setForward] = React.useState(false);

  return (
    <div>
      <button onClick={() => setForward(!forward)}>Toggle</button>
      <Animate.FadeIn
        forward={forward}
        duration={0.3}
        timingFunction="ease-out"
      >
        <span>Fade in animation</span>
      </Animate.FadeIn>
    </div>
  );
}
```

## Built-in animations

Here is all available animations:

`FadeIn`
`FadeInUp`
`FadeInLeft`
`FadeInDown`
`FadeInRight`
`FadeOut`
`FadeOutUp`
`FadeOutLeft`
`FadeOutDown`
`FadeOutRight`
`ZoomIn`
`ZoomInUp`
`ZoomInLeft`
`ZoomInDown`
`ZoomInRight`
`ZoomOut`
`ZoomOutUp`
`ZoomOutLeft`
`ZoomOutDown`
`ZoomOutRight`
