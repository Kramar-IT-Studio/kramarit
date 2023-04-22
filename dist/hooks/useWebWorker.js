import { useEffect, useState } from 'react';
export const useWebWorker = (worker) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const onMessage = (event) => {
            setData(event.data);
        };
        worker.addEventListener('message', onMessage);
        return () => {
            worker.removeEventListener('message', onMessage);
            worker.terminate();
        };
    }, [worker]);
    const postMessage = (message) => {
        worker.postMessage(message);
    };
    return [data, postMessage];
};
