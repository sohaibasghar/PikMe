import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackArrow from '../assets/icons/back';

const Header = ({style}) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <BackArrow />
      <Text style={styles.skipText}>Skip</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5F7783',
    fontFamily: 'Poppins-SemiBold',
  },
});
