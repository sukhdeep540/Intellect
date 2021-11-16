import { hasNotch } from "react-native-device-info"
import { Platform,Dimensions } from "react-native"
export const SIZES = {
    screenWidth : Dimensions.get('window').width,
    screenHeight : Dimensions.get('window').height,
    statusBarMargin : Platform.OS === 'ios' ? hasNotch() ? 32 : 16 : 16,
    bottomNotchSpace : Platform.OS === 'ios' ? hasNotch() ? 16 : 0 : 0,
    horizontalAppMargin : 3.32
}