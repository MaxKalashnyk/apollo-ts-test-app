import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://swapi.co/api/',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
