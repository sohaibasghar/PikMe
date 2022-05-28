import {SafeAreaView, Keyboard, TextInput, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Logo from '../../../components/Logo';
import PrimaryButton from '../../../components/PrimaryButton';
import Header from '../../../components/Header';
import LoginText from '../../../components/LoginText';

const Name = ({navigation}) => {
  const [name, setName] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleChange = text => {
    setName(text);
  };

  const handlePress = () => {
    navigation.navigate('userName');
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
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={{flex: isKeyboardVisible ? 0.35 : 1}}>
          <Text style={styles.semiBoldText}>Hey! What's your name?</Text>
          <TextInput
            placeholder={'Name'}
            style={styles.nameInput}
            value={name}
            onChangeText={handleChange}
          />
        </View>
        <PrimaryButton
          disabled={name < 1}
          onPress={handlePress}
          title={'Next'}
        />
        <LoginText />
      </View>
    </SafeAreaView>
  );
};

export default Name;
