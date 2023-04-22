type CopyToClipboardHook = [(text: string) => void, boolean];
declare const useCopyToClipboard: () => CopyToClipboardHook;
export default useCopyToClipboard;
