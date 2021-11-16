/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const AppButton = ({onPress, title}) => {

    const { nextButtonStyle, nextButtonTextStyle } = styles
    // Common button component for the application
    return (
        <TouchableOpacity
            onPress={()=>{
                onPress()
            }}
            style={nextButtonStyle}>
            <Text style={nextButtonTextStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

AppButton.proptypes = {
    onPress: PropTypes.func,
    title: PropTypes.string
}

export default AppButton;
