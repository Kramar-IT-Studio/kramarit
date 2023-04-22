interface FetchState<T> {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
}
declare const useFetch: <T>(url: string, options?: RequestInit, initialData?: T | null) => FetchState<T>;
export default useFetch;
