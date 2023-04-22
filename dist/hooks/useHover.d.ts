import { RefObject } from 'react';
interface HoverProps {
    isHovering: boolean;
    hoverRef: RefObject<HTMLElement>;
}
declare const useHover: () => HoverProps;
export default useHover;
