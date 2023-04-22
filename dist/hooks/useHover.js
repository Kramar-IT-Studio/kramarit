import { useState, useEffect, useRef } from 'react';
const useHover = () => {
    const [isHovering, setIsHovering] = useState(false);
    const hoverRef = useRef(null);
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
