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
  StyleSheet,
  StatusBar
} from 'react-native';

import SwiperView from './src/components/Swiper';

const App = () => {
  const {container} = styles
  return (
    <View style={container}>
      <StatusBar barStyle={"light-content"} />
      <SwiperView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});

export default App;
