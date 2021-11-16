/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import BarLevels from './../BarLevels';
import AppButton from './../AppButton';
import SliderView from '../SliderView';
import { appImages } from '../../assets';
import { CONSTANTS } from './../../app/app.constants';
import { styles } from './styles';

const SwiperBaseView = ({ item, clickToScroll }) => {

    const { swiperContainer, titleStyle, descriptionStyle, crossButtonStyle, titleButtonViewStyle } = styles;

// Method to generate the widget on the basis of the scroll
    getView = () => {
        switch (item.index) {
            case 0:
                return widgetOne(item.index, item.style)
            case 1:
                return widgetTwo(item.index, item.style)
            default:
                return widgets(item.index, item.style)
        }
    }

    return (
        <View key={'view' + item.index} style={swiperContainer}>
            <View style={titleButtonViewStyle}>
                <Text style={titleStyle} >
                    {item.title}
                </Text>
                <TouchableOpacity style={crossButtonStyle}>
                    <Image style={{ flex: 1 }} source={appImages.crossIcon} style={crossButtonStyle} />
                </TouchableOpacity>
            </View>
            <Text style={descriptionStyle}>{item.description}</Text>
            {
                getView()
            }
            <AppButton title={CONSTANTS.nextButton} onPress={() => { clickToScroll(item.index) }} />
        </View>
    );
};

// Method to generate the Circular Slider View
const widgetOne = (index, style) => {
    return (
        <View style={style}>
            <SliderView key={index} />
        </View>
    )
}

// Method to generate the Bar Level View
const widgetTwo = (index, style) => {
    return (
        <View style={style}>
            <BarLevels key={index} />
        </View>
    )
}

// Method to generate the empty slider
const widgets = (index, style) => {
    return (
        <View style={style} />
    )
}

SwiperBaseView.proptypes = {
    item: PropTypes.object,
    clickToScroll: PropTypes.func
}

export default SwiperBaseView;
