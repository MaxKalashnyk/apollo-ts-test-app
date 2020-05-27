import styled from 'styled-components';
import { WrapProps } from './types';

export const Wrap = styled.div<WrapProps>`
  display: none;
  position: absolute;
  z-index: 2;
  top: 40px;
  right: 0;
  background-color: ${(props) => props.theme.color.white.primary};
  border-radius: 5px;
  width: 180px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: ${(props) => props.theme.spacing(5)};
  ${(props) =>
    !!props.isOpen &&
    `
    display: flex;
    flex-direction: column;
  `};
`;

export const Button = styled.button`
  max-width: 100px;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(3)};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.americanPalette.pinkGlamour};
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${(props) => props.theme.color.white.primary};
`;

export const LinksList = styled.ul`
  margin-bottom: ${(props) => props.theme.spacing(5)};
`;

export const LinkItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacing(2)};
  &:last-child {
    margin-bottom: 0;
  }
`;
