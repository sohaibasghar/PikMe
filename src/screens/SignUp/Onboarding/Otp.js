import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Keyboard} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PrimaryButton from '../../../components/PrimaryButton';

const CELL_COUNT = 4;

const Otp = ({navigation}) => {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(60);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const handleChange = () => {
    navigation.navigate('name');
  };
  return (
    <SafeAreaView style={styles.root}>
      <View style={{flex: isKeyboardVisible ? 0.5 : 1}}>
        <Text style={styles.primaryText}>Enter code</Text>
        <Text style={styles.secondaryText}>
          Your code was sent to +1 4805550103
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="numeric"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={styles.secondaryText}>
          {counter > 0 ? `Resend code ${counter}` : 'Resend code'}
        </Text>
      </View>
      <PrimaryButton
        onPress={handleChange}
        title={'Confirm Code'}
        disabled={value.length < 4}
      />
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 72,
    height: 96,
    lineHeight: 85,
    fontSize: 32,
    borderWidth: 2,
    borderColor: '#D7D9E0',
    textAlign: 'center',
    borderRadius: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  focusCell: {
    borderColor: '#D7D9E0',
  },
  primaryText: {
    color: '#5F7783',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    marginTop: 16,
  },
  secondaryText: {
    color: '#71727B',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    lineHeight: 48,
  },
});
