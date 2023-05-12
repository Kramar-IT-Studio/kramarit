import { useEffect, useState } from 'react';
import { deepEqual } from '../utils';
export const useDeepEqualComparison = (value1, value2) => {
    const [isEqual, setIsEqual] = useState(true);
    useEffect(() => {
        setIsEqual(deepEqual(value1, value2));
    }, [value1, value2]);
    return isEqual;
};
