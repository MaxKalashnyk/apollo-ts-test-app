import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, List, ListItem } from './styles';
import { ROUTES } from '../../types';
import { IProps } from './types';

export const NavBar: React.FC<IProps> = ({ isLogin }) => {
  return (
    <Nav>
      <List>
        <ListItem>
          <NavLink exact={true} to={ROUTES.Home}>
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact={true} to={ROUTES.About}>
            About
          </NavLink>
        </ListItem>
        {isLogin ? (
          <ListItem>
            <NavLink exact={true} to={ROUTES.Dashboard}>
              Dashboard
            </NavLink>
          </ListItem>
        ) : null}
      </List>
    </Nav>
  );
};
