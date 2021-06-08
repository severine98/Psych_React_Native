import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

export const widthPct = (widthPercent: number) => {
  const elemWidth = widthPercent;
  return PixelRatio.roundToNearestPixel((viewportWidth * elemWidth) / 100);
};

export const heightPct = (heightPercent: number) => {
  const deviceHeight =
    Platform.OS === "android" ? viewportHeight - StatusBar.currentHeight : viewportHeight;
  const elemHeight = heightPercent;
  return PixelRatio.roundToNearestPixel((deviceHeight * elemHeight) / 100);
};

export const isSmallPhone = heightPct(100) < 600;
export const isTallPhone = heightPct(100) > 800;
export const isWidePhone = widthPct(100) > 400;
export const isLargePhone = heightPct(100) > 800 && widthPct(100) > 400;
