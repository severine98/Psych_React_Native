import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { isLargePhone, isSmallPhone } from "./dimensions";

const statusBarHeight = getStatusBarHeight(true);

const adjFactor = isSmallPhone ? 0.75 : isLargePhone ? 1.1 : 1;
const base = 24 * adjFactor;

const bottomSpace = getBottomSpace() * 0.5;

export const spacing = {
  tiniest: 4 * adjFactor,
  tiny: 6 * adjFactor,
  small: 12 * adjFactor,
  baseSmall: 18 * adjFactor,
  base,
  baseMedium: 30 * adjFactor,
  baseLarge: 36 * adjFactor,
  large: 48 * adjFactor,
  huge: 60 * adjFactor,

  topNavHeight: 60 + statusBarHeight,
  topNavHeaderHeight: 90 + statusBarHeight,
  tabBarHeight: 70 + bottomSpace,
  statusBarHeight,
  bottomSpace,
  bottomOfPage: bottomSpace + base,
  buttonHeight: 48,
  shortButtonHeight: 38,
};
