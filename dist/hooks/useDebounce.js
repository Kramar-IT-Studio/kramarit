import { useEffect, useState } from 'react';
/*
Хук использует обобщенный тип <T>, который может быть использован
для любого типа значения, который нужно дебаунсить. Он также принимает
параметр delay, который указывает, сколько миллисекунд должно пройти
перед обновлением debouncedValue.

Хук использует useState, чтобы хранить текущее дебаунсированное
значение, и useEffect, чтобы запускать таймер, который обновляет
это значение.

Наконец, хук возвращает debouncedValue, которое может быть
использовано в приложении вместо исходного значения
для уменьшения нагрузки на рендеринг и улучшения производительности.
*/
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;
