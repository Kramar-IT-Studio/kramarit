import { useRef } from 'react';

type Callback = (...args: unknown[]) => void;

function useDebouncedCallback<T extends Callback>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function debouncedCallback(this: unknown, ...args: unknown[]) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback.apply(this, args);
      timeoutRef.current = null;
    }, delay);
  }

  return debouncedCallback as T;
}

export default useDebouncedCallback;
