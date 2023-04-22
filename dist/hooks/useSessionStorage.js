import { useState } from 'react';
function useSessionStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });
    const handleSetValue = newValue => {
        setValue((prevValue) => {
            const updatedValue = typeof newValue === 'function'
                ? newValue(prevValue)
                : newValue;
            sessionStorage.setItem(key, JSON.stringify(updatedValue));
            return updatedValue;
        });
    };
    return [value, handleSetValue];
}
export default useSessionStorage;
