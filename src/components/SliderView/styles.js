import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { COLORS } from '../../app/app.colors';
export const styles = StyleSheet.create({
    widgetViewStyle: {
        alignItems: 'center',
        width: responsiveWidth(80),
        height: null
    },
    dashedCircleStyle: {
        height: responsiveWidth(80),
        width: responsiveWidth(80),
        borderRadius: responsiveWidth(40),
        borderColor: COLORS.lightGreyColor,
        borderStyle: 'dashed',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerCircleStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: COLORS.lightColor,
        overflow: 'hidden',
        height: responsiveWidth(58),
        width: responsiveWidth(58),
        borderRadius: responsiveWidth(58 / 2)
    },
    deepCircleStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#B8EFF4',
        overflow: 'hidden',
        height: responsiveWidth(40),
        width: responsiveWidth(40),
        borderRadius: responsiveWidth(40 / 2)
    },
    valueTextStyle: {
        color: COLORS.whiteColor,
        fontSize: responsiveFontSize(4),
        fontWeight: '500'
    },
    sliderStyle: {
        width: responsiveWidth(70),
        height: responsiveHeight(15),
    },
    animationStyle: {
        position: 'absolute',
        alignSelf: 'center',
        height: responsiveWidth(30)
    }
});