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
  &:hover,
  &.active {
    background-size: 4px 50px;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.americanPalette.brightYarrow} 0%,
      ${(props) => props.theme.color.americanPalette.brightYarrow} 100%
    );
    background-position: 0 100%;
    background-repeat: repeat-x;
  }
`;
