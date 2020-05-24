import styled from 'styled-components';

export const LaunchListWrap = styled.div`
  overflow: hidden auto;
  background-color: ${(props) => props.theme.color.americanPalette.cityLights};
  width: 300px;
`;

export const Title = styled.h3`
  padding: ${(props) => props.theme.spacing(5)};
  font-weight: ${(props) => props.theme.typography.font.weight.bold};
`;

export const LaunchListItems = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LaunchListItem = styled.li`
  padding: ${(props) => props.theme.spacing(5)};
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.theme.color.americanPalette.brightYarrow};
  }
`;
