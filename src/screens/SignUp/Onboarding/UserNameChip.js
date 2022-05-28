import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const UserNameChip = ({userName, handleChange}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleChange(userName);
      }}
      style={styles.badgeContainer}>
      <View style={styles.chip}>
        <Text style={styles.chipText}>{userName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserNameChip;
