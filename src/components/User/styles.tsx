import styled from 'styled-components';

export const ImageWrap = styled.div`
  width: ${(props) => props.theme.spacing(8)};
  height: ${(props) => props.theme.spacing(8)};
  border-radius: 50%;

  & > img {
    max-width: 100%;
  }
`;
