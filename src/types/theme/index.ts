import 'styled-components';
import { IColorThemeConfig } from './IColorThemeConfig';
import { ILayoutThemeConfig } from './ILayoutThemeConfig';
import { IFontThemeConfig } from './IFontThemeConfig';

declare module 'styled-components' {
  export interface DefaultTheme
    extends Readonly<{
      color: IColorThemeConfig;
      device: Readonly<{
        breakpoint: Readonly<{
          desktop: string;
        }>;
        fromDesktop: string;
        untilDesktop: string;
      }>;
      baseSpacingPixelValue: number;
      spacing: (multiple: number) => string;
      typography: {
        font: IFontThemeConfig;
      };
      layout: ILayoutThemeConfig;
      zIndex: {
        background: number;
        backgroundContent: number;
        page: number;
        foregroundContent: number;
        modals: number;
        alerts: number;
      };
    }> {}
}
