import styled from 'styled-components';

export const Wrap = styled.div`
  width: calc(100vw - 300px);
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: auto;
`;

export const Status = styled.div`
  margin-top: 40px;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 4px;
`;

export const StatusSuccess = styled.span`
  color: #2cb84b;
`;

export const StatusFailed = styled.span`
  color: #ff695e;
`;

export const ImageList = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  padding-bottom: 100px;
`;
