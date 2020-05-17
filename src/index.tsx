import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { DefaultThemeProvider } from './themes/provider/provider';
import { defaultTheme } from './themes/default';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { LoginContext } from './contexts/Login/Login';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <DefaultThemeProvider theme={defaultTheme}>
        <LoginContext>
          <Router>
            <Switch>
              {routes.map(({ path, isExact, component }) => {
                return (
                  <Route
                    key={path}
                    exact={isExact}
                    path={path}
                    component={component}
                  />
                );
              })}
            </Switch>
          </Router>
        </LoginContext>
      </DefaultThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
