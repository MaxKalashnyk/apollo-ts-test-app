import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: ${(props) => props.theme.spacing(4)};
  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  z-index: 1;
  &:hover,
  &.active {
    &:before {
      opacity: 1;
    }
  }
  &:before {
    content: '';
    position: absolute;
    opacity: 0;
    top: -2px;
    left: -4px;
    right: -4px;
    bottom: -2px;
    z-index: -1;
    transition: background-color 0.4s ease-in-out;
    background-color: ${(props) =>
      props.theme.color.americanPalette.brightYarrow};
  }
`;
