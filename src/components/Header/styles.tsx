import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: ${(props) =>
    props.theme.color.americanPalette.greenDardner};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing(5)} 0;
`;
