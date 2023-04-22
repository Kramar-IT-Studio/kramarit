import React, { FC } from 'react';

export interface MyComponentProps {
  text: string;
}

export const MyComponent: FC<MyComponentProps> = ({ text }) => {
  return <div>{text}</div>;
};
