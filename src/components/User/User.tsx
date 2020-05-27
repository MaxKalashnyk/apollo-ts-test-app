import React, { useState, useCallback } from 'react';
import { IProps } from './types';
import { ImageWrap, Wrap } from './styles';
import { ProfilePanel } from '../ProfilePanel';

const User: React.FC<IProps> = ({ imgUrl }) => {
  const [isOpenProfile, setOpenProfile] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setOpenProfile(!isOpenProfile);
  }, [isOpenProfile]);

  return (
    <Wrap>
      <ImageWrap onClick={onClick}>
        <img src={imgUrl} alt="profle" />
      </ImageWrap>
      <ProfilePanel isOpen={isOpenProfile} />
    </Wrap>
  );
};

export { User };
