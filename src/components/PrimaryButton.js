import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryButton = ({title, disabled = false, onPress}) => {
  let start = disabled ? {x: 1, y: 1} : {x: 0, y: 0};
  let end = {x: 1, y: 1};
  let colors = disabled ? ['#60CAFF', '#60CAFF'] : ['#0061FF', '#60CAFF'];
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.button}>
      <LinearGradient
        start={start}
        end={end}
        colors={colors}
        style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
    padding: 20,
  },
  button: {
    height: 64,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
