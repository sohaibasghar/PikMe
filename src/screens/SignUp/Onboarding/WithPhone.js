import {View, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import PrimaryButton from '../../../components/PrimaryButton';
import PhoneNumber from './PhoneNumber';
import Otp from './Otp';
import LoginText from '../../../components/LoginText';

const WithPhone = props => {
  const [step, setStep] = useState(1);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleChange = () => {
    setStep(step + 1);
  };

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
  return (
    <View style={styles.container}>
      {step === 1 && (
        <View style={{flex: isKeyboardVisible ? 0.5 : 1}}>
          <PhoneNumber handleChange={handleChange} />
        </View>
      )}
      {step == 2 && (
        <View style={{flex: 1}}>
          <Otp {...props} handleChange={handleChange} />
        </View>
      )}
      <LoginText {...props} />
    </View>
  );
};

export default WithPhone;
