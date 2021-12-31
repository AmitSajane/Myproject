/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/routes/StackNav';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#08406e" />  
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
 
});

export default App;
