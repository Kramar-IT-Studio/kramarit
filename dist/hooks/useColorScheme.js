import { useState, useEffect } from 'react';
export const useColorScheme = () => {
    const [colorScheme, setColorScheme] = useState(null);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = () => {
            setColorScheme(mediaQuery.matches ? 'dark' : 'light');
        };
        listener();
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);
    return colorScheme;
};
