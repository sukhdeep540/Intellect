import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import { SIZES } from "../../app/app.sizes";
import { COLORS } from "./../../app/app.colors";
export const styles = StyleSheet.create({
    nextButtonStyle: {
        backgroundColor: COLORS.whiteColor, 
        height: responsiveHeight(7), 
        width: responsiveWidth(93.36),
        borderRadius: responsiveHeight(10)/2, 
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf:'center',
        marginBottom: SIZES.bottomNotchSpace + 16
    },
    nextButtonTextStyle: {
        fontSize: responsiveFontSize(2),
        fontWeight: '700',
    }
});