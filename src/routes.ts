import { Route, ROUTES } from './types';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { withHeader } from './utils/withTheme';

// const component = route.isPrivate
//   ? ProtectedComponent(route.component)
//   : route.component;

export const routes: Route[] = [
  {
    name: 'Home',
    path: ROUTES.Home,
    isExact: true,
    isNavBar: true,
    component: withHeader(Home),
  },
  {
    name: 'About',
    path: ROUTES.About,
    isNavBar: true,
    isPrivate: true,
    component: withHeader(About),
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
];
