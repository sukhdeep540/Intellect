/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
    Text, View
} from 'react-native';
// import * as Progress from 'react-native-progress';
import {ProgressCircle} from 'react-native-progress/Circle';
import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';
import { responsiveWidth } from "react-native-responsive-dimensions";
import { appImages } from '../../assets';
import { styles } from './styles';
import { COLORS } from '../../app/app.colors';


//Circular Widget View
const ProgressBarCircle = () => {
    
    const { progressBarStyle, innerCircleStyle, dashedCircleStyle, valueTextStyle, sliderStyle, deepCircleStyle, animationStyle } = styles
    const [value, setValue] = useState(0)

    return (
        <>
        
{/* Circular slider view */ }
            <View style={dashedCircleStyle}>
                <ProgressCircle
                    progress={value / 10}
                    size={responsiveWidth(61)}
                    thickness={responsiveWidth(1.5)}
                    animated={false}
                    indeterminate={false}
                    color={value === 0 ? COLORS.darkColor : COLORS.whiteColor}
                    borderWidth={0}
                    strokeCap={'round'}
                    style={progressBarStyle} >
                    <View style={innerCircleStyle} >
                        <View style={deepCircleStyle} >
                            <LottieView style={animationStyle} source={require('./../../assets/animation/animation.json')} autoPlay loop />
                            <Text style={valueTextStyle}>{value}</Text>
                        </View>
                    </View>
                </ProgressCircle>
            </View>

{/* Horizontal slider view */ }
            <Slider
                style={sliderStyle}
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(value) => {
                    setValue(value)
                }}
                thumbImage={appImages.thumb}
                minimumTrackTintColor={COLORS.skyBlueColor}
                maximumTrackTintColor={COLORS.whiteColor}
            />
        </>
    );
};

export default ProgressBarCircle;