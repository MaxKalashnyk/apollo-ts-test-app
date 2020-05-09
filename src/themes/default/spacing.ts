export const baseSpacingPixelValue = 4;

export function spacing(multiple: number) {
  const value: number = multiple * baseSpacingPixelValue;
  return `${value}px`;
}
