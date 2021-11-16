/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { CONSTANTS } from '../../app/app.constants';
import { styles } from './styles';
import { appImages } from '../../assets';

const BarLevels = () => {

  // Mock Object array for displaying the bars
  const data = [
    {
      name: 'five',
      index: 0,
      value: 10,
      image: appImages.bar_5_grey,
      activeImage: appImages.bar_5_white
    },
    {
      name: 'four',
      index: 1,
      value: 8,
      image: appImages.bar_4_grey,
      activeImage: appImages.bar_4_white
    },
    {
      name: 'three',
      index: 2,
      value: 6,
      image: appImages.bar_3_grey,
      activeImage: appImages.bar_3_white
    },
    {
      name: 'two',
      index: 3,
      value: 4,
      image: appImages.bar_2_grey,
      activeImage: appImages.bar_2_white
    },
    {
      name: 'one',
      index: 4,
      value: 2,
      image: appImages.bar_1_grey,
      activeImage: appImages.bar_1_white
    }
  ]
  const { widgetViewStyle, widegetItemStyle, imageStyle, statusTextStyle } = styles;
  const [currentScale, setCurrentScale] = useState(0)

  // Map through the object array to show the bars and the scale status text
  return (
    <View style={widgetViewStyle}>
      <Text style={statusTextStyle}>{getScaleText(currentScale)}</Text>
      {
        data.map((item) => {
          return (
            <TouchableOpacity
              style={[widegetItemStyle, { width: `${item.value * 10}%` }]}
              key={item.index}
              onPress={() => setCurrentScale(item.value)}>
              <Image
                style={imageStyle}
                source={item.value <= currentScale ? item.activeImage : item.image}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          )
        })
      }
    </View>
  );
};

// Method to get the Scale Status of the Bars ('Low','Medium','High')
const getScaleText = (value) => {
  switch (value) {
    case 2:
    case 4:
      return CONSTANTS.scaleTextLow
    case 6:
      return CONSTANTS.scaleTextMedium
    case 8:
    case 10:
      return CONSTANTS.scaleTextHigh
    default:
      return ' '
  }
}

export default BarLevels;
