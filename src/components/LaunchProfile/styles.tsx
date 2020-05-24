import styled from 'styled-components';

export const Wrap = styled.div`
  width: calc(100vw - 300px);
  padding-left: ${(props) => props.theme.spacing(5)};
  padding-right: ${(props) => props.theme.spacing(5)};
  overflow-y: auto;
`;

export const Status = styled.div`
  margin-top: ${(props) => props.theme.spacing(10)};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spacing(1)};
`;

export const StatusSuccess = styled.span`
  color: ${(props) => props.theme.color.americanPalette.lighGreenishBlue};
`;

export const StatusFailed = styled.span`
  color: ${(props) => props.theme.color.americanPalette.pinkGlamour};
`;

export const ImageList = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing(5)};
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${(props) => props.theme.spacing(10)};
  padding-bottom: 100px;
`;
