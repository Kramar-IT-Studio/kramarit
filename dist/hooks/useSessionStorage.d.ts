type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;
declare function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>];
export default useSessionStorage;
