import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { NavBar } from './components/NavBar';
import { User } from './components/User';

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

const App = () => {
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
    <Router>
      <NavBar routes={routes.filter((route) => route.isNavBar)} />
      <div>
        {!name && <button onClick={signIn}>Log in</button>}
        {!!name && <button onClick={signOut}>Log out</button>}
        {!!name && <User name={name} imgUrl={imgUrl} />}
      </div>
      <Switch>
        {routes.map((route) => {
          // const component = route.isPrivate
          //   ? ProtectedComponent(route.component)
          //   : route.component;
          return (
            <Route
              key={route.path}
              exact={route.isExact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
