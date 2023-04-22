import { useEffect, useRef } from 'react';
/*
В этом хуке мы используем два useEffect хука. Первый сохраняет
переданный колбэк в ref, а второй устанавливает интервал
с использованием setInterval и вызывает сохраненный колбэк
каждый раз, когда интервал проходит. Если delay равен null,
то интервал не запускается.
*/
function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        function tick() {
            var _a;
            if (savedCallback.current !== null) {
                (_a = savedCallback.current) === null || _a === void 0 ? void 0 : _a.call(savedCallback);
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
export default useInterval;
