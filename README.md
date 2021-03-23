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
        from={{ color: 'blue' }}
        to={{ color: 'red' }}
        duration={0.2}
        timingFunction="ease-in"
      >
        <span>Custom animation</span>
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
        duration={0.2}
        timingFunction="ease-in"
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
