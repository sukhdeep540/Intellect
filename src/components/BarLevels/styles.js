import { StyleSheet } from 'react-native';
import { responsiveScreenHeight, responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from '../../app/app.colors';
export const styles = StyleSheet.create({
    widgetViewStyle: {
        alignItems: 'center',
        width: responsiveWidth(80),
        height: null
    },
    widegetItemStyle: {
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: responsiveScreenHeight(2),
        height: responsiveScreenHeight(6)
    },
    imageStyle: {
        flex: 1,
    },
    statusTextStyle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '700',
        color: COLORS.whiteColor,
        paddingBottom: 10
    }
});