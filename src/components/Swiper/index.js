/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import {
    View
} from 'react-native';
import Swiper from 'react-native-swiper'
import SwiperBaseView from './SwiperBaseView';
import { CONSTANTS } from '../../app/app.constants';
import { styles } from './styles';

const SwiperView = () => {

    const { container, dotStyle, activeDotStyle, paginationViewStyle, slide } = styles;
    const swiperRef = useRef();
    const data = [
        {
            slideName: 'one',
            index: 0,
            style: slide,
            title: CONSTANTS.slideTitle,
            description: CONSTANTS.slideDescription
        }, {
            slideName: 'two',
            index: 1,
            style: slide,
            title: CONSTANTS.slideTitle,
            description: CONSTANTS.slideDescription
        }, {
            slideName: 'three',
            index: 2,
            style: slide,
            title: CONSTANTS.slideTitle,
            description: CONSTANTS.slideDescription
        }, {
            slideName: 'four',
            index: 3,
            style: slide,
            title: CONSTANTS.slideTitle,
            description: CONSTANTS.slideDescription
        }, {
            slideName: 'five',
            index: 4,
            style: slide,
            title: CONSTANTS.slideTitle,
            description: CONSTANTS.slideDescription
        },
    ]

// Method called to change the swiper page on button click
clickToScroll = (index) => {
        if (index === 4) {
            swiperRef.current.scrollTo(0)
        } else {
            swiperRef.current.scrollTo(index + 1)
        }
    }

// Swiper View : Map function to generate the Wiggets
    return (
        <View style={container}>
            <Swiper
                ref={swiperRef}
                loop={false}
                style={styles.wrapper}
                dot={<View style={dotStyle} />}
                activeDot={<View style={activeDotStyle} />}
                paginationStyle={paginationViewStyle}
            >
                {
                    data.map((item) => {
                        const { index, style } = item
                        return (
                            <SwiperBaseView
                                clickToScroll={(index) => { clickToScroll(index) }}
                                item={item}
                                key={index} />
                        )
                    })
                }
            </Swiper>
        </View>
    );
};

export default SwiperView;
