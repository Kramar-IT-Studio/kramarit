import { useEffect, useState } from 'react';

export const useIdle = (idleTime: number, onIdle: () => void) => {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const resetTimeout = () => {
      if (timeout) clearTimeout(timeout);
      if (idle) setIdle(false);
      timeout = setTimeout(() => {
        setIdle(true);
        onIdle();
      }, idleTime);
    };

    const handleEvent = () => {
      resetTimeout();
    };

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('mousedown', handleEvent);
    window.addEventListener('keydown', handleEvent);
    window.addEventListener('touchmove', handleEvent);

    resetTimeout();

    return () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('mousedown', handleEvent);
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('touchmove', handleEvent);
      if (timeout) clearTimeout(timeout);
    };
  }, [idleTime, onIdle, idle]);

  return idle;
};
