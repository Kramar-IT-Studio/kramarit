import { useEffect, useState } from 'react';
/*
Здесь мы используем хук useState, чтобы сохранить последний
IntersectionObserverEntry, полученный при взаимодействии.
Затем мы создаем новый IntersectionObserver и используем его
для наблюдения за элементом, связанным с ref. Когда происходит
взаимодействие, мы обновляем состояние intersectionObserverEntry.
Наконец, мы очищаем наблюдение при размонтировании элемента,
чтобы избежать утечек памяти.

При использовании хука useIntersection можно передавать два
аргумента: ref - ссылку на элемент, который нужно отслеживать,
и options - дополнительные опции для IntersectionObserver. Они
могут включать в себя такие параметры, как threshold (порог вхождения)
и root (элемент, который используется для определения, находится ли
целевой элемент в области видимости).
*/
const useIntersection = (ref, options) => {
    const [intersectionObserverEntry, setIntersectionObserverEntry] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setIntersectionObserverEntry(entries[0]);
        }, Object.assign({}, options));
        const current = ref.current;
        if (current) {
            observer.observe(current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [ref, options]);
    return intersectionObserverEntry;
};
export default useIntersection;
