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
        from={{ color: 'blue' }}
        to={{ color: 'red' }}
        duration={0.2}
        timingFunction="ease-in"
      >
        <span>自定义动画</span>
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
        duration={0.2}
        timingFunction="ease-in"
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
