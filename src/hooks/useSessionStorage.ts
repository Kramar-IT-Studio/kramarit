import { useState } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const handleSetValue: SetValue<T> = newValue => {
    setValue((prevValue: T) => {
      const updatedValue =
        typeof newValue === 'function'
          ? (newValue as (prevValue: T) => T)(prevValue)
          : newValue;
      sessionStorage.setItem(key, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  return [value, handleSetValue];
}

export default useSessionStorage;
