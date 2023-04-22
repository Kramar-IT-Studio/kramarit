import { useState, useRef, useCallback } from 'react';
const useAnimation = (options) => {
    const { duration = 1000, onEnd } = options || {};
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const animationRef = useRef();
    const startTimeRef = useRef();
    const pauseTimeRef = useRef();
    const start = useCallback(() => {
        if (isRunning) {
            return;
        }
        setIsRunning(true);
        startTimeRef.current = performance.now() - elapsedTime;
        animationRef.current = requestAnimationFrame(() => {
            const now = performance.now();
            const elapsedTime = now - (startTimeRef.current || 0);
            if (elapsedTime >= duration) {
                setIsRunning(false);
                setElapsedTime(0);
                if (onEnd) {
                    onEnd();
                }
            }
            else {
                setElapsedTime(elapsedTime);
                animationRef.current = requestAnimationFrame(() => {
                    start();
                });
            }
        });
    }, [duration, elapsedTime, isRunning, onEnd]);
    const stop = useCallback(() => {
        setIsRunning(false);
        setElapsedTime(0);
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    }, []);
    const pause = useCallback(() => {
        if (!isRunning) {
            return;
        }
        setIsRunning(false);
        pauseTimeRef.current = performance.now();
        cancelAnimationFrame(animationRef.current || 0);
    }, [isRunning]);
    const resume = useCallback(() => {
        if (isRunning) {
            return;
        }
        setIsRunning(true);
        startTimeRef.current =
            performance.now() -
                ((pauseTimeRef.current || 0) - (startTimeRef.current || 0));
        animationRef.current = requestAnimationFrame(() => {
            const now = performance.now();
            const elapsedTime = now - (startTimeRef.current || 0);
            if (elapsedTime >= duration) {
                setIsRunning(false);
                setElapsedTime(0);
                if (onEnd) {
                    onEnd();
                }
            }
            else {
                setElapsedTime(elapsedTime);
                animationRef.current = requestAnimationFrame(() => {
                    start();
                });
            }
        });
    }, [duration, isRunning, onEnd, start]);
    return {
        start,
        stop,
        pause,
        resume,
    };
};
export default useAnimation;
