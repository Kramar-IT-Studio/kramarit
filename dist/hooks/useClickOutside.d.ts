import { RefObject } from 'react';
type Event = MouseEvent | TouchEvent;
declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void): void;
export default useClickOutside;
