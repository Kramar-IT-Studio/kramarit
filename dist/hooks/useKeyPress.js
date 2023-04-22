import { useEffect } from 'react';
const useKeyPress = (targetKey, onPress) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === targetKey) {
                onPress();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetKey, onPress]);
};
export default useKeyPress;
