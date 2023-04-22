import { useState, useEffect } from 'react';

type AsyncState<T> = {
  loading: boolean;
  data?: T;
  error?: Error;
};

type AsyncFunction<T> = () => Promise<T>;

function useAsync<T>(asyncFunction: AsyncFunction<T>) {
  const [state, setState] = useState<AsyncState<T>>({ loading: true });

  useEffect(() => {
    let isMounted = true;

    asyncFunction()
      .then(data => {
        if (isMounted) {
          setState({ data, loading: false });
        }
      })
      .catch(error => {
        if (isMounted) {
          setState({ error, loading: false });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [asyncFunction]);

  return state;
}

export default useAsync;
