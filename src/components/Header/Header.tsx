import React from 'react';
import { NavBar } from '../NavBar';
import { Login } from '../Login';
import { Container } from '../Container';
import { Wrap, Inner } from './styles';
import { useLoginState } from '../../contexts/Login';

export const Header: React.FC = () => {
  const { isLoggedIn } = useLoginState();

  return (
    <Wrap>
      <Container>
        <Inner>
          <NavBar isLogin={isLoggedIn} />
          <Login />
        </Inner>
      </Container>
    </Wrap>
  );
};
