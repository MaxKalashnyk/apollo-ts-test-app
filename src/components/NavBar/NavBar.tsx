import React from 'react';
import { Nav, List, ListItem, StyledNavLink } from './styles';
import { ROUTES } from '../../types';
import { IProps } from './types';

export const NavBar: React.FC<IProps> = ({ isLogin }) => {
  return (
    <Nav>
      <List>
        <ListItem>
          <StyledNavLink exact={true} activeClassName="active" to={ROUTES.Home}>
            Home
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink
            exact={true}
            activeClassName="active"
            to={ROUTES.About}
          >
            About
          </StyledNavLink>
        </ListItem>
        {isLogin ? (
          <>
            <ListItem>
              <StyledNavLink
                exact={true}
                activeClassName="active"
                to={ROUTES.Dashboard}
              >
                Dashboard
              </StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink
                exact={true}
                activeClassName="active"
                to={ROUTES.Rockets}
              >
                Rockets
              </StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink
                exact={true}
                activeClassName="active"
                to={ROUTES.Ships}
              >
                Ships
              </StyledNavLink>
            </ListItem>
          </>
        ) : null}
      </List>
    </Nav>
  );
};
