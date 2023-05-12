import { useEffect, useState } from 'react';
import { deepEqual } from '../utils';

export function useDeepEqualComparison<TData = unknown>(
  value1: TData,
  value2: TData
): boolean {
  const [isEqual, setIsEqual] = useState(true);

  useEffect(() => {
    setIsEqual(deepEqual(value1, value2));
  }, [value1, value2]);

  return isEqual;
}
