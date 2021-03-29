import React from 'react';

export default function useWillMount(callback: () => void): void {
  const mount = React.useRef<boolean>(false);

  if (!mount.current) {
    callback();
    mount.current = true;
  }
}
