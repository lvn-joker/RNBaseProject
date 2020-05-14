import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const deviceHeight = isIphoneX()
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
        ? height - StatusBar.currentHeight
        : height;

export function RFPercentage(percent) {
    const heightPercent = (percent * deviceHeight) / 100;
    return new Math.round(heightPercent);
}

export function RFValue(fontSize) {
    // guideline width for standard 5" device screen
    const standardScreenWidth = 375;
    const widthPercent = (fontSize * width) / standardScreenWidth;
    return new Math.round(widthPercent);
}

const vh = height / 100;
const vw = width / 100;

export const sizeWidth = (size) => {
    return size * vw;
};

export const sizeHeight = (size) => {
    return size * vh;
};

export const sizeFont = (size) => {
    return size * vw;
};
