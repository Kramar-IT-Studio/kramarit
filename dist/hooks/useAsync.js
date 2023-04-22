import { useState, useEffect } from 'react';
function useAsync(asyncFunction) {
    const [state, setState] = useState({ loading: true });
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
