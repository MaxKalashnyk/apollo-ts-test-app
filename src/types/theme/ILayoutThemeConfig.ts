export type DeviceWidth = 'mobile' | 'desktop';

export interface ILayoutThemeConfig
  extends Readonly<{
    gridColumnCount: number;
    device: Record<
      DeviceWidth,
      {
        maxWidth: string;
        gutterWidth: string;
      }
    >;
  }> {}
