export interface IFontThemeConfig
  extends Readonly<{
    weight: Readonly<{
      bold: number;
      normal: number;
    }>;
    size: Readonly<{
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      p: string;
    }>;
  }> {}
