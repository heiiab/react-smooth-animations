# react-smooth-animations

✨ 一组用于 React 的动画

[English](./README.md) | 简体中文

## 安装

```bash
npm install react-smooth-animations
```

或者

```bash
yarn add react-smooth-animations
```

## 示例

```jsx
import React from 'react';
import Animate from 'react-smooth-animations';

const App = () => {
  const [forward, setForward] = React.useState(false);

  return (
    <div>
      <button onClick={() => setForward(!forward)}>切换</button>
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
         * 或者
         * intermediate={[
         *  { percentage: 30, opacity: 1 },
         *  { percentage: 60, ... }
         * ]}
        */
        to={{ opacity: 0, transform: 'translateY(10px) rotate(-45deg)' }}
        duration={1.5}
        timingFunction="ease-in-out"
      >
        <span style={{ display: 'inline-block' }}>自定义动画</span>
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
      <button onClick={() => setForward(!forward)}>切换</button>
      <Animate.FadeIn
        forward={forward}
        duration={0.3}
        timingFunction="ease-out"
      >
        <span>渐入动画</span>
      </Animate.FadeIn>
    </div>
  );
}
```

## 内置动画

目前可用的内置动画:

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

`SlideInUp`

`SlideInLeft`

`SlideInDown`

`SlideInRight`

`SlideOutUp`

`SlideOutLeft`

`SlideOutDown`

`SlideOutRight`

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

`BounceIn`

`BounceInUp`

`BounceInLeft`

`BounceInDown`

`BounceInRight`

`BounceOut`

`BounceOutUp`

`BounceOutLeft`

`BounceOutDown`

`BounceOutRight`

`FlipInUp`

`FlipInLeft`

`FlipInDown`

`FlipInRight`

`FlipOutUp`

`FlipOutLeft`

`FlipOutDown`

`FlipOutRight`
