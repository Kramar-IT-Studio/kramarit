import { useEffect, RefObject } from 'react';

/*
Этот хук добавляет обработчик событий клика и касания 
на весь документ. Когда происходит клик/касание вне 
элемента, связанного с переданным ref, вызывается 
переданный обработчик handler. Этот хук позволяет 
легко обрабатывать клики вне определенных элементов 
и закрывать модальные окна, выпадающие списки и т.д.
*/

type Event = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
