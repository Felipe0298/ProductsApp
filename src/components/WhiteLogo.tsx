import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { loginStyles } from '../theme/loginTheme';

export const WhiteLogo = () => {
  return (
    <View style={{
      alignItems: 'center'
    }}>

      <Image
        source={require('../assets/react-logo-white.png')}
        style={{
          width: 110,
          height: 100
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});