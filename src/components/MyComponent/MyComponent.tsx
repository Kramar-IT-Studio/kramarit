import React, { FC } from 'react';

interface MyComponentProps {
  text: string;
}

const MyComponent: FC<MyComponentProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default MyComponent;
