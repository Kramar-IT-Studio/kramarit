import { useEffect, useRef } from 'react';

/*
В этом хуке мы используем два useEffect хука. Первый сохраняет 
переданный колбэк в ref, а второй устанавливает интервал 
с использованием setInterval и вызывает сохраненный колбэк 
каждый раз, когда интервал проходит. Если delay равен null, 
то интервал не запускается.
*/

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current?.();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
