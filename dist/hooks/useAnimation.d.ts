type UseAnimationOptions = {
    duration?: number;
    onEnd?: () => void;
};
type UseAnimationResult = {
    start: () => void;
    stop: () => void;
    pause: () => void;
    resume: () => void;
};
declare const useAnimation: (options?: UseAnimationOptions) => UseAnimationResult;
export default useAnimation;
