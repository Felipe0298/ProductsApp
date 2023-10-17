import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';


export const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}
