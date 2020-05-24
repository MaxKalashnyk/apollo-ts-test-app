import styled from 'styled-components';

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
