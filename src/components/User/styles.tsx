import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: ${(props) => props.theme.spacing(9)};
  height: ${(props) => props.theme.spacing(9)};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  & > img {
    max-width: 100%;
  }
`;
