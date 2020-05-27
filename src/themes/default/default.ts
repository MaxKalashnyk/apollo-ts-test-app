import { DefaultTheme } from 'styled-components';
import { desktop, fromDesktop, untilDesktop } from './breakpoints';
import { layoutThemeConfig } from './configs/layout';
import { colorThemeConfig } from './configs/colors';
import { baseSpacingPixelValue, spacing } from './spacing';
import { fontWeight, fontSize } from './configs/typography';

export const defaultTheme: DefaultTheme = {
  color: colorThemeConfig,
  device: {
    breakpoint: {
      desktop,
    },
    fromDesktop,
    untilDesktop,
  },
  baseSpacingPixelValue,
  spacing,
  typography: {
    font: {
      weight: { ...fontWeight },
      size: { ...fontSize },
    },
  },
  layout: layoutThemeConfig,
  zIndex: {
    background: -(Math.pow(2, 31) - 1),
    backgroundContent: -99,
    page: 0,
    foregroundContent: 100,
    modals: 1000,
    alerts: 10000,
  },
};
