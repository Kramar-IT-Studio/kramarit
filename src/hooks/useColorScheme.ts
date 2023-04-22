import { useState, useEffect } from 'react';

type ColorScheme = 'light' | 'dark' | null;

export const useColorScheme = (): ColorScheme => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(null);

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
