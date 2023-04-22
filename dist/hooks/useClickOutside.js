import { useEffect } from 'react';
function useClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            const el = ref === null || ref === void 0 ? void 0 : ref.current;
            if (!el || el.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
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
