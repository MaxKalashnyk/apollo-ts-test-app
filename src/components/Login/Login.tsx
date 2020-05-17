import React, { useEffect, useState } from 'react';
import { IProps } from './types';
import { User } from '../User';
import { useLoginDispatch, useLoginState } from '../../contexts/Login';
import { userLogin } from '../../utils/userLogin';
import { UserLogin } from '../../contexts/Login/types';

const _onInit = (auth2: any) => {
  console.log('init OK', auth2);
};
const _onError = (err: any) => {
  console.log('error', err);
};

export const Login: React.FC<IProps> = () => {
  const storageData = userLogin.getData();

  const defaultUserData = {
    fullName: storageData?.fullName ? storageData?.fullName : '',
    imageURL: storageData?.imageURL ? storageData?.imageURL : '',
  };

  const [userData, setUserData] = useState(defaultUserData);
  const loginDispatch = useLoginDispatch();
  // const loginState = useLoginState();

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();

      setUserData({
        fullName: profile.getName(),
        imageURL: profile.getImageUrl(),
      });

      const loginData: UserLogin = {
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

      userLogin.setData(loginData);
    });
  };

  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      loginDispatch({
        type: 'logout',
      });
      userLogin.clearData();
      setUserData(defaultUserData);
    });
  };

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError);
    });
  }, []);

  const { fullName, imageURL } = userData;

  // console.log('loginState', loginState);
  console.log('userData', userData);

  return (
    <div>
      {!fullName ? <button onClick={signIn}>Log in</button> : null}
      {fullName ? <button onClick={signOut}>Log out</button> : null}
      {fullName && imageURL ? <User name={fullName} imgUrl={imageURL} /> : null}
    </div>
  );
};
