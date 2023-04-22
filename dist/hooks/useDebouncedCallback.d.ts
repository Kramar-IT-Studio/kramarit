type Callback = (...args: unknown[]) => void;
declare function useDebouncedCallback<T extends Callback>(callback: T, delay: number): T;
export default useDebouncedCallback;
