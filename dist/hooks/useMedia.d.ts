type MediaQueries = {
    [key: string]: string;
};
type MediaQueryTuple = [string, string];
declare const useMedia: (queries: MediaQueries, values: MediaQueryTuple[], defaultValue: string) => string;
export default useMedia;
