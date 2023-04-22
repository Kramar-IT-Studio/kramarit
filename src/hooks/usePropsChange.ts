import { useEffect, useRef } from 'react';

type Props = {
  [key: string]: unknown;
};

const usePropsChange = (
  props: Props,
  callback: () => void,
  watchProps: string[] = []
) => {
  const prevProps = useRef<Props>({});

  useEffect(() => {
    const changedProps = Object.entries(props).reduce(
      (acc, [key, value]) =>
        prevProps.current[key] !== value ? { ...acc, [key]: value } : acc,
      {}
    );

    if (
      watchProps.length === 0 ||
      Object.keys(changedProps).some(key => watchProps.includes(key))
    ) {
      callback();
    }

    prevProps.current = props;
  }, Object.values(props));
};

export default usePropsChange;
