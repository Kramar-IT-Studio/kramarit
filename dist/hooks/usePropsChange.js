import { useEffect, useRef } from 'react';
const usePropsChange = (props, callback, watchProps = []) => {
    const prevProps = useRef({});
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((acc, [key, value]) => prevProps.current[key] !== value ? Object.assign(Object.assign({}, acc), { [key]: value }) : acc, {});
        if (watchProps.length === 0 ||
            Object.keys(changedProps).some(key => watchProps.includes(key))) {
            callback();
        }
        prevProps.current = props;
    }, Object.values(props));
};
export default usePropsChange;
