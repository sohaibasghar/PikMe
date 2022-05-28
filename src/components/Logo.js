import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from '../assets/icons/logo.png';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
