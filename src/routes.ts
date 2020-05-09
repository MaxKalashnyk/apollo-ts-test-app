import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { Route } from './types';

export const routes: Route[] = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    isNavBar: true,
    component: Home,
  },
  {
    name: 'Profile',
    path: '/profile',
    isNavBar: true,
    isPrivate: true,
    component: Profile,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
];
