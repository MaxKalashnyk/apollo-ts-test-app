import React, { useCallback } from 'react';
import { IProps } from './types';
import { Wrap, Button, LinksList, LinkItem } from './styles';
import { userLogin } from '../../utils/userLogin';
import { useLoginDispatch } from '../../contexts/Login';

export const ProfilePanel: React.FC<IProps> = ({ isOpen }) => {
  const loginDispatch = useLoginDispatch();

  const signOut = useCallback(() => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      userLogin.clearData();
      loginDispatch({
        type: 'logout',
      });
    });
  }, [loginDispatch]);

  return (
    <Wrap isOpen={isOpen}>
      <LinksList>
        <LinkItem>
          <a href="/">Profile</a>
        </LinkItem>
        <LinkItem>
          <a href="/">Settings</a>
        </LinkItem>
      </LinksList>
      <Button onClick={signOut}>Log out</Button>
    </Wrap>
  );
};
