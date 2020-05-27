import styled from 'styled-components';
import { ImageType } from './types';

export const Image = styled.img<ImageType>`
  width: 100%;
  max-width: 100%;
  height: 200px;
  ${({ isHidden }) =>
    isHidden &&
    `
    display: none;
  `}
`;
