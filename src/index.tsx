import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { DefaultThemeProvider } from './themes/provider/provider';
import { defaultTheme } from './themes/default';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginContext } from './contexts/Login/Login';
import { ROUTES } from './types';
import { withHeader } from './utils/withTheme';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Dashboard } from './components/Dashboard';
import { Rockets } from './pages/Rockets';
import { Ships } from './pages/Ships';

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
              <Route
                exact={true}
                path={ROUTES.Home}
                component={withHeader(Home)}
              />
              <Route
                exact={true}
                path={ROUTES.About}
                component={withHeader(About)}
              />
              <Route
                exact
                path={ROUTES.Dashboard}
                component={withHeader(Dashboard)}
              />
              <Route
                exact
                path={ROUTES.Rockets}
                component={withHeader(Rockets)}
              />
              <Route exact path={ROUTES.Ships} component={withHeader(Ships)} />
              <Route exact={true} path="*" component={NotFound} />
            </Switch>
          </Router>
        </LoginContext>
      </DefaultThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
