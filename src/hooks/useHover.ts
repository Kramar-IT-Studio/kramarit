import { useState, useEffect, RefObject, useRef } from 'react';

interface HoverProps {
  isHovering: boolean;
  hoverRef: RefObject<HTMLElement>;
}

const useHover = (): HoverProps => {
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef<HTMLElement>(null);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const node = hoverRef.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [hoverRef]);

  return { hoverRef, isHovering };
};

export default useHover;
