const desktopPixels: number = 812;
export const desktop: string = `${desktopPixels}px`;
export const fromDesktop: string = `@media screen and (min-width: ${desktop})`;
export const untilDesktop: string = `@media screen and (max-width: ${`${
  desktopPixels - 1
}px`})`;
