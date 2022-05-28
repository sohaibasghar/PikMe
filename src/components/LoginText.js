import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const LoginText = ({navigation}) => {
  const handleLoginPress = () => {
    navigation.navigate('login');
  };
  return (
    <Pressable onPress={handleLoginPress} style={styles.textContainer}>
      <Text style={styles.loginText}>Already have an account?</Text>
      <Text style={styles.loginBtn}>Login</Text>
    </Pressable>
  );
};

export default LoginText;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginText: {
    fontWeight: '400',
    lineHeight: 21,
    color: '#5F7783',
    marginRight: 5,
  },
  loginBtn: {
    color: '#00A0FF',
    fontWeight: '600',
  },
});
