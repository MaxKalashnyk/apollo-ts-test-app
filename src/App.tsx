import React from 'react';
import { AppContainer } from './styles';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '.';

export const App = () => (
  <ApolloProvider client={client}>
    <AppContainer>
      <h2>My first Apollo app</h2>
    </AppContainer>
  </ApolloProvider>
);
