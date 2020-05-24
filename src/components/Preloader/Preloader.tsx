import React, { memo } from 'react';
import { IProps } from './types';
import { Wrap, Loader } from './styles';

const Preloader: React.FC<IProps> = ({ children }) => {
  const spinner = (
    <Loader>
      {Array.from(Array(11).keys()).map((key) => (
        <div key={key} />
      ))}
    </Loader>
  );

  return (
    <Wrap>
      {children}
      {spinner}
    </Wrap>
  );
};

export default memo(Preloader);
