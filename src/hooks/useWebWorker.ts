import { useEffect, useState } from 'react';

export const useWebWorker = (worker: Worker) => {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      setData(event.data);
    };

    worker.addEventListener('message', onMessage);

    return () => {
      worker.removeEventListener('message', onMessage);
      worker.terminate();
    };
  }, [worker]);

  const postMessage = (message: unknown) => {
    worker.postMessage(message);
  };

  return [data, postMessage] as const;
};
