import { useState, useEffect, useCallback } from 'react';

function useDebouncedState<T>(
  initialState: T,
  delay: number
): [T, (newValue: T) => void] {
  const [state, setState] = useState<T>(initialState);
  const [debouncedState, setDebouncedState] = useState<T>(initialState);

  const debounce = useCallback(
    (newValue: T) => {
      const timeout = setTimeout(() => {
        setDebouncedState(newValue);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    },
    [delay]
  );

  useEffect(() => {
    const cleanup = debounce(state);

    return cleanup;
  }, [debounce, state]);

  return [debouncedState, setState];
}

export default useDebouncedState;
