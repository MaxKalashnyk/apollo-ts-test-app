import React from 'react';
import { NavLink } from 'react-router-dom';
import { IProps } from './types';
import { Route } from '../../types';
import { Nav, List, ListItem } from './styles';

export const NavBar: React.FC<IProps> = ({ routes }) => {
  return (
    <Nav>
      <List>
        {routes.map((route: Route) => (
          <ListItem key={route.path}>
            <NavLink exact={route.isExact} to={route.path}>
              {route.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};
