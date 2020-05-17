import React, { useState, useEffect } from 'react';
import { IProps } from './types';
import { User } from '../User';

const _onInit = (auth2: any) => {
  console.log('init OK', auth2);
};
const _onError = (err: any) => {
  console.log('error', err);
};

const defaultUserData = {
  name: '',
  imgUrl: '',
};

export const Login: React.FC<IProps> = () => {
  const [userData, setUserData] = useState(defaultUserData);

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();

      setUserData({
        name: profile.getName(),
        imgUrl: profile.getImageUrl(),
      });

      // console.log('ID: ' + profile.getId());
      // console.log('Full Name: ' + profile.getName());
      // console.log('Given Name: ' + profile.getGivenName());
      // console.log('Family Name: ' + profile.getFamilyName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail());
      // const id_token = googleUser.getAuthResponse().id_token;
      // console.log('ID Token: ' + id_token);
    });
  };

  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
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

  const { name, imgUrl } = userData;

  return (
    <div>
      {!name && <button onClick={signIn}>Log in</button>}
      {!!name && <button onClick={signOut}>Log out</button>}
      {!!name && <User name={name} imgUrl={imgUrl} />}
    </div>
  );
};
