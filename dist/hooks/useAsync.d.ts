type AsyncState<T> = {
    loading: boolean;
    data?: T;
    error?: Error;
};
type AsyncFunction<T> = () => Promise<T>;
declare function useAsync<T>(asyncFunction: AsyncFunction<T>): AsyncState<T>;
export default useAsync;
