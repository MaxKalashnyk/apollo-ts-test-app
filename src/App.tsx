import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar routes={routes.filter((route) => route.isNavBar)} />
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
