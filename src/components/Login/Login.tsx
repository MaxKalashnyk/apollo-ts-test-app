import React, { useEffect, useCallback } from 'react';
import { IProps } from './types';
import { User } from '../User';
import { userLogin } from '../../utils/userLogin';
import { LoginState, LoginDispatch } from '../../contexts/Login/types';
import { useLoginDispatch, useLoginState } from '../../contexts/Login';
import { Wrap, Button } from './styles';

const _onInit = (dispatch: LoginDispatch) => {
  const storageLoginData = userLogin.getData();
  if (storageLoginData && storageLoginData.isLoggedIn) {
    const { authToken, email, id, imageURL, fullName } = storageLoginData;
    dispatch({
      type: 'login',
      payload: {
        authToken,
        email,
        id,
        imageURL,
        fullName,
      },
    });
  }
};
const _onError = (err: any) => {
  console.log('error', err);
};

export const Login: React.FC<IProps> = () => {
  const loginDispatch = useLoginDispatch();
  const loginState = useLoginState();

  const signIn = useCallback(() => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();

      const loginData: LoginState = {
        isLoggedIn: true,
        authToken: googleUser.getAuthResponse().id_token,
        email: profile.getEmail(),
        id: profile.getId(),
        imageURL: profile.getImageUrl(),
        fullName: profile.getName(),
      };

      loginDispatch({
        type: 'login',
        payload: loginData,
      });

      userLogin.setData({ ...loginData });
    });
  }, [loginDispatch]);

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => _onInit(loginDispatch), _onError);
    });
  }, [loginDispatch]);

  const { authToken, imageURL } = loginState;

  return (
    <Wrap>
      {!authToken ? <Button onClick={signIn}>Log in</Button> : null}
      {authToken && imageURL ? <User imgUrl={imageURL} /> : null}
    </Wrap>
  );
};
