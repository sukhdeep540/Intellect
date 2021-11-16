import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import { SIZES } from "../../app/app.sizes";
import { COLORS } from "../../app/app.colors";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.darkColor,
        flex: 1,
    },
    wrapper: {},
    swiperContainer: {
        top: SIZES.statusBarMargin + 48,
        height: SIZES.screenHeight - SIZES.statusBarMargin - 48
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        width: responsiveWidth(15),
        height: responsiveHeight(0.8),
        backgroundColor: COLORS.lightGreyColor,
        borderRadius: 2.5
    },
    activeDotStyle: {
        width: responsiveWidth(15),
        height: responsiveHeight(0.8),
        backgroundColor: COLORS.whiteColor,
        borderRadius: 2.5
    },
    paginationViewStyle: {
        top: SIZES.statusBarMargin + 24,
        height: 10,
        bottom: null,
        justifyContent: 'space-around',
        paddingHorizontal: responsiveWidth(1.66)
    },
    titleStyle: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '700',
        color: COLORS.whiteColor,
    },
    descriptionStyle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: '700',
        color: COLORS.whiteColor,
        marginLeft: responsiveWidth(3.32),
        marginTop: responsiveHeight(2.5)
    },
    titleButtonViewStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal:responsiveWidth(3.32),
    },
    crossButtonStyle: {
        height: responsiveWidth(4),
        width: responsiveWidth(4),
    }
});