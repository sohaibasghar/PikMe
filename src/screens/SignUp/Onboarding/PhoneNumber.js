import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import PrimaryButton from '../../../components/PrimaryButton';

const PhoneNumber = ({handleChange}) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Phone number</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          autoFocus
          layout="second"
          defaultCode="US"
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={text => {
            setphoneNumber(text);
          }}
          placeholder="(123) 456-8888"
        />
        <View style={styles.borderBottom} />
      </View>
      <PrimaryButton
        disabled={phoneNumber.length < 8}
        onPress={handleChange}
        title="Send Code"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: '#fff',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: '#5F7783',
    marginVertical: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default PhoneNumber;
