import React from 'react';
import { Header } from '../components/Header';

export const withHeader = (Component: React.FC) => () => (
  <>
    <Header />
    <Component />
  </>
);
