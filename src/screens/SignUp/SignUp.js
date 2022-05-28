import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';
import TopBarNavigation from './Onboarding/TopBarNavigator';
import styles from './styles';

const SignUp = props => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <TopBarNavigation {...props} />
    </SafeAreaView>
  );
};

export default SignUp;
