import { useState } from 'react';
import { useComponentDidMount } from './useComponentDidMount';
const useMedia = (queries, values, defaultValue) => {
    const mediaQueryLists = Object.keys(queries).map(q => window.matchMedia(queries[q]));
    const getValue = () => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);
        return typeof values[index] !== 'undefined'
            ? values[index][1]
            : defaultValue;
    };
    const [value, setValue] = useState(getValue);
    useComponentDidMount(() => {
        const handler = () => setValue(getValue);
        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));
        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });
    return value;
};
export default useMedia;
