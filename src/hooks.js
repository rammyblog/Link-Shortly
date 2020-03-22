

import React, { useRef, useEffect, useState } from 'react';
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};


// I also made it to support running when specific values update in deps
// The default value for deps will be undefined if you did not pass it
// and will have the same effect as not passing the parameter to useEffect
// so it watch for general updates by default
export function useDidUpdate(callback, deps) {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
}