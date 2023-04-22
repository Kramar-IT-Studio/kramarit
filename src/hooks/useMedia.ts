import { useState } from 'react';
import { useComponentDidMount } from './useComponentDidMount';

/*
Здесь MediaQueries - это объект, где ключ - это имя медиазапроса, 
а значение - это сам медиазапрос в формате строки. MediaQueryTuple 
- это кортеж, который содержит имя медиазапроса и значение, которое 
будет возвращено хуком, если медиазапрос сработал. defaultValue 
- это значение по умолчанию, которое будет возвращено, 
если не один из медиазапросов не сработал.

Хук создает медиазапросы на основе переданных объекта queries,
затем при изменении ширины экрана выбирает из переданных значений 
values тот, который соответствует текущему медиазапросу, и 
возвращает его. Если ни один медиазапрос не сработал, 
то возвращается значение defaultValue.
*/

type MediaQueries = {
  [key: string]: string;
};

type MediaQueryTuple = [string, string];

const useMedia = (
  queries: MediaQueries,
  values: MediaQueryTuple[],
  defaultValue: string
) => {
  const mediaQueryLists = Object.keys(queries).map(q =>
    window.matchMedia(queries[q])
  );

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined'
      ? values[index][1]
      : defaultValue;
  };

  const [value, setValue] = useState(getValue);

  useComponentDidMount(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));
    return () =>
      mediaQueryLists.forEach(mql =>
        mql.removeEventListener('change', handler)
      );
  });

  return value;
};

export default useMedia;
