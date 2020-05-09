import { ILayoutThemeConfig } from '../../../../types/theme/ILayoutThemeConfig';
import { spacing } from '../../spacing';

export const layoutThemeConfig: ILayoutThemeConfig = {
  gridColumnCount: 12,
  device: {
    mobile: {
      gutterWidth: spacing(2),
      maxWidth: 'none',
    },
    desktop: {
      gutterWidth: spacing(2),
      maxWidth: spacing(480),
    },
  },
};
