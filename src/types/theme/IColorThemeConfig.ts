export interface IColorThemeConfig
  extends Readonly<{
    black: Readonly<{
      primary: string;
      secondary: string;
    }>;
    white: Readonly<{
      primary: string;
      secondary: string;
    }>;
    red: Readonly<{
      error: string;
    }>;
    americanPalette: Readonly<{
      greenDardner: string;
    }>;
  }> {}
