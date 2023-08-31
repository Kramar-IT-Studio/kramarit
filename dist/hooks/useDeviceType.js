import { useState, useEffect } from 'react';
export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop');
    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            if (innerWidth >= 1100) {
                setDeviceType('desktop');
            }
            else if (innerWidth >= 768) {
                setDeviceType('tablet');
            }
            else {
                setDeviceType('mobile');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return deviceType;
};
