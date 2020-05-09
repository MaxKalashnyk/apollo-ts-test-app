export interface IFontThemeConfig
  extends Readonly<{
    weight: Readonly<{
      bold: number;
      normal: number;
    }>;
  }> {}
