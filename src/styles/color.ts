export const colors = {
  black: '#000000',
  blackBrand: '#1D1D1E',
  blue: '#0078C8',
  greyDark: '#6B6B6B',
  greyLight: '#A9A9A9',
  greyPale: '#E0E0E0',
  greyBackground: '#F7F8F8',
  greyFur: '#C8CDD2',
  greyFurDark: '#A8ACAF',
  white: '#FFFFFF',

  purpleLight: '#ADC5F8',
  purpleDark: '#747ccc',

  // Socials
  google: '#4885ed',
};
export type Color = keyof typeof colors;

export const opacity = (color: string, opacity: number) => {
  const op = Math.floor(opacity * 255);
  return color + op.toString(16);
};
