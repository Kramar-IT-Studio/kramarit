import { useState, useEffect } from 'react';
/*
Этот хук использует useState для управления состоянием и
useEffect для сохранения значения в локальном хранилище
при изменении состояния. Функция принимает ключ для
хранилища и начальное значение и возвращает кортеж
с текущим значением и функцией для изменения значения.
*/
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    useEffect(() => {
        try {
            const item = JSON.stringify(storedValue);
            window.localStorage.setItem(key, item);
        }
        catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);
    return [storedValue, setStoredValue];
}
export default useLocalStorage;
