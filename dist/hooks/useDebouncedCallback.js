import { useRef } from 'react';
function useDebouncedCallback(callback, delay) {
    const timeoutRef = useRef(null);
    function debouncedCallback(...args) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback.apply(this, args);
            timeoutRef.current = null;
        }, delay);
    }
    return debouncedCallback;
}
export default useDebouncedCallback;
