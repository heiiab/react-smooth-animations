import React from 'react';
import { Intermediate } from './types';

export function styleToString(style: React.CSSProperties) {
  return Object.entries(style).map(([key, value]) => `${key}:${value}`).join(';');
}

export function intermediateParser(intermediate: Intermediate) {
  let nodes = { ...intermediate };
  const reversedNodes = { ...intermediate };

  if (Array.isArray(intermediate)) {
    nodes = {};
    intermediate.forEach(({ percentage, ...properties }) => {
      nodes[percentage] = properties;
    });
  }

  const percentages = Object.keys(nodes).sort((a, b) => Number(a) - Number(b));

  for (let i = 0, len = percentages.length; i < Math.floor(len / 2); i += 1) {
    const percentage = percentages[i];
    const matchPercentage = percentages[len - 1 - i];

    [
      reversedNodes[<number><unknown>percentage],
      reversedNodes[<number><unknown>matchPercentage]
    ] = [
      nodes[<number><unknown>matchPercentage],
      nodes[<number><unknown>percentage]
    ];
  }

  const enterString = percentages.reduce((styleString, percentage) => {
    styleString += `
      ${percentage}% {
        ${styleToString(nodes[percentage as unknown as number])}
      }
    `;

    return styleString;
  }, '');
  const leaveString = percentages.reduce((styleString, percentage) => {
    styleString += `
      ${percentage}% {
        ${styleToString(reversedNodes[percentage as unknown as number])}
      }
    `;

    return styleString;
  }, '');

  return [enterString, leaveString];
}
