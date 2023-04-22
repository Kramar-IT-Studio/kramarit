type Props = {
    [key: string]: unknown;
};
declare const usePropsChange: (props: Props, callback: () => void, watchProps?: string[]) => void;
export default usePropsChange;
