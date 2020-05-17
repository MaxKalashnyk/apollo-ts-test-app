import React from 'react';
import { IProps } from './types';
import { NavBar } from '../NavBar';
import { Login } from '../Login';
import { Container } from '../Container';
import { Wrap, Inner } from './styles';
import { routes } from '../../routes';

export const Header: React.FC<IProps> = () => {
  return (
    <Wrap>
      <Container>
        <Inner>
          <NavBar routes={routes.filter((route) => route.isNavBar)} />
          <Login />
        </Inner>
      </Container>
    </Wrap>
  );
};
