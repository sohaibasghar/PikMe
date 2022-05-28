import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const InterestChip = ({title, onPress, selected}) => {
  let colors = selected ? ['#0061FF', '#60CAFF'] : ['#EDEFF6', '#EDEFF6'];
  let start = {x: 0, y: 0};
  let end = {x: 1, y: 1};
  return (
    <TouchableOpacity onPress={onPress} key={title}>
      <LinearGradient
        style={styles.interestChip}
        colors={colors}
        start={start}
        end={end}>
        <Text
          style={{
            color: selected ? '#FFF' : '#000',
            fontFamily: 'Poppins-Medium',
            fontSize: 13,
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default InterestChip;
