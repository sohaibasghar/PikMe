import {
  View,
  Keyboard,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import logo from '../../../assets/icons/logo.png';
import PrimaryButton from '../../../components/PrimaryButton';
import Logo from '../../../components/Logo';
import EyeOff from '../../../components/EyeOff';
import Eye from '../../../components/Eye';
import Header from '../../../components/Header';

const renderCheckBox = (value, label) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View
      style={{
        height: 20,
        width: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <CheckBox
        onFillColor="#00A0FF99"
        onCheckColor="#fff"
        onTintColor="#00A0FF"
        style={{marginVertical: 5, marginRight: 8, height: 15, width: 15}}
        disabled
        value={value}
      />
    </View>
    <Text>{label}</Text>
  </View>
);

const Password = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [secureEntry, setSecureEntry] = useState(true);
  const [validation, setValidation] = useState({
    containNumber: false,
    containSpecialChar: false,
  });
  const handleChange = text => {
    const numberInput = /^(?=.*?[0-9])/.test(text);
    const specialChar = /^(?=.*?[#?!@$%^&*-])/.test(text);
    if (numberInput) {
      setValidation({...validation, containNumber: true});
    } else if (specialChar) {
      setValidation({...validation, containSpecialChar: true});
    } else {
      setValidation({containNumber: false, containSpecialChar: false});
    }

    setPassword(text);
  };

  const handlePress = () => {
    navigation.navigate('interests');
  };

  const handlePasswordShow = () => {
    setSecureEntry(!secureEntry);
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
  }, [validation.containNumber, validation.containSpecialChar]);
  const disabled =
    password.length < 8
      ? true
      : !validation.containNumber
      ? true
      : !validation.containSpecialChar
      ? true
      : false;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={{flex: isKeyboardVisible ? 0.33 : 1}}>
          <Text style={styles.semiBoldText}>Create a strong password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              value={password}
              placeholder="Enter password"
              onChangeText={handleChange}
              secureTextEntry={secureEntry}
              style={[
                styles.nameInput,
                {width: 300, fontSize: secureEntry ? 18 : 32},
              ]}
            />
            <TouchableOpacity onPress={handlePasswordShow}>
              {secureEntry ? <Eye /> : <EyeOff />}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.smallText}>Strength Indicator</Text>
            {renderCheckBox(password.length > 7, '8 Characters long')}
            {renderCheckBox(
              validation.containSpecialChar,
              'Include a special character',
            )}
            {renderCheckBox(
              validation.containNumber,
              'Have at least one number',
            )}
          </View>
        </View>
        <PrimaryButton
          disabled={disabled}
          onPress={handlePress}
          title={'Next'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Password;
