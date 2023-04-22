import { useState, useEffect, useCallback } from 'react';
function useDebouncedState(initialState, delay) {
    const [state, setState] = useState(initialState);
    const [debouncedState, setDebouncedState] = useState(initialState);
    const debounce = useCallback((newValue) => {
        const timeout = setTimeout(() => {
            setDebouncedState(newValue);
        }, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, [delay]);
    useEffect(() => {
        const cleanup = debounce(state);
        return cleanup;
    }, [debounce, state]);
    return [debouncedState, setState];
}
export default useDebouncedState;
