import React from 'react';
import { IProps } from './types';
import { ImageWrap } from './styles';

const User: React.FC<IProps> = ({ name, imgUrl }) => {
  return (
    <>
      <p>Hey {name}!</p>
      <ImageWrap>
        <img src={imgUrl} alt="profle" />
      </ImageWrap>
    </>
  );
};

export { User };
