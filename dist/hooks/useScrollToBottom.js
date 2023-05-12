import { useEffect } from 'react';
export const useScrollToBottom = (callback) => {
    useEffect(() => {
        function handleScroll() {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            // Проверяем, достигнута ли нижняя граница экрана
            if (scrollTop + clientHeight >= scrollHeight) {
                callback();
            }
        }
        // Добавляем обработчик события прокрутки
        window.addEventListener('scroll', handleScroll);
        // Удаляем обработчик события прокрутки при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);
};
