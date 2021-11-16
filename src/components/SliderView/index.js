/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
    View,
} from 'react-native';
import ProgressBarCircle from './ProgressBarCircle';
import { styles } from './styles';

const SliderView = () => {

    const { widgetViewStyle } = styles
    return (
        <View style={widgetViewStyle}>
            <ProgressBarCircle />
        </View>
    );
};

export default SliderView;
