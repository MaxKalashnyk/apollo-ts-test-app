import styled from 'styled-components';

export const Wrap = styled.div`
  width: calc(100vw - 300px);
  padding: ${(props) => props.theme.spacing(10)}
    ${(props) => props.theme.spacing(4)};
  overflow-y: auto;
`;

export const Status = styled.div`
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

export const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.spacing(5)};
  font-size: ${(props) => props.theme.typography.font.size.h1};
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
`;

export const Details = styled.p`
  line-height: 1.5;
`;
export const FlightNumber = styled.span``;
export const Message = styled.div``;
