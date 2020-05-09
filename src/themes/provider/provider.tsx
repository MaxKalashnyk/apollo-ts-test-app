import React from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import { Reset } from 'styled-reset';
import { defaultTheme } from '../default/';

interface IDefaultThemeProvider
  extends Readonly<{
    theme?: DefaultTheme;
  }> {}

const GlobalStyles = createGlobalStyle`

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'PT Sans', sans-serif;
    font-weight: ${(props) => props.theme.typography.font.weight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img {
    display: block;
    width: 100%;
  }

`;

export const DefaultThemeProvider: React.FC<IDefaultThemeProvider> = ({
  children,
  theme = defaultTheme,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <Reset />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);
