import React from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './types';
import { Route } from '../../types';

export const NavBar: React.FC<IProps> = ({ routes }) => (
  <>
    {routes.map((route: Route) => (
      <NavLink key={route.path} exact={route.isExact} to={route.path}>
        {route.name}
      </NavLink>
    ))}
  </>
);
