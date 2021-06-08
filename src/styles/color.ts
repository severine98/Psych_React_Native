export const colors = {
  black: "#000000",
  blackBrand: "#1D1D1E",
  blue: "#0078C8",
  greyDark: "#6B6B6B",
  greyLight: "#A9A9A9",
  greyPale: "#E0E0E0",
  greyBackground: "#F7F8F8",
  greyFur: "#C8CDD2",
  greyFurDark: "#A8ACAF",
  white: "#FFFFFF",

  borderGrey: "#A8ACAF",

  orange: "#F9644E",
  green: "#00A578",
  pink: "#F245C2",
  red: "#E83338",

  orangePastel: "#FABFB6",
  greenPastel: "#A8E0D1",
  pinkPastel: "#FAB5E7",
  bluePastel: "#DDF3F3",

  orangeFn: "#DD7256",
  pinkFn: "#CA25CA",
  blueFn: "#51A4CD",
  mustardFn: "#B8BB0F",

  warning: "#D12545",
};
export type Color = keyof typeof colors;

const avatarColors = [colors.green, colors.orange, colors.pink];
const getRandomAvatarColor = () => {
  const avatarColorOptions = [colors.orange, colors.green, colors.pink];
  const randomIndex = Math.floor(Math.random() * avatarColorOptions.length);
  return avatarColorOptions[randomIndex];
};
export const getAvatarColor = (relationship: "user" | "partner" | "child") => {
  return relationship === "user"
    ? avatarColors[0]
    : relationship === "partner"
    ? avatarColors[1]
    : getRandomAvatarColor();
};

export const opacity = (color: string, opacity: number) => {
  const op = Math.floor(opacity * 255);
  return color + op.toString(16);
};
