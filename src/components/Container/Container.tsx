import React from 'react';
import { IProps } from './types';
import { Wrap } from './styles';

export const Container: React.FC<IProps> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
