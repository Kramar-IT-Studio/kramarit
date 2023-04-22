declare function useDebouncedState<T>(initialState: T, delay: number): [T, (newValue: T) => void];
export default useDebouncedState;
