import React from 'react';
import { AppContainer } from './styles';
import LaunchList from './components/LaunchList/';
import LaunchProfile from './components/LaunchProfile/';

export const App = () => (
  <AppContainer>
    <LaunchList />
    <LaunchProfile />
  </AppContainer>
);
