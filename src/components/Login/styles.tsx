import styled from 'styled-components';

export const Wrap = styled.div``;

export const Button = styled.button`
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(3)};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.white.primary};
  border-radius: 4px;
  border: none;
  outline: none;
`;
