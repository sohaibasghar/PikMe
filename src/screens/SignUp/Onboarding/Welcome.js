import {View, Text, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeImage from '../../../assets/images/welcome.jpg';
import Confetti from '../../../components/Confetti';

const Welcome = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={WelcomeImage} style={styles.container}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subHeading}>Picking the best contests...</Text>
      </ImageBackground>
      <Confetti />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
    lineHeight: 48,
  },
  subHeading: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFF',
    lineHeight: 24,
  },
});
