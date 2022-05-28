import {View, Keyboard, TextInput, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Logo from '../../../components/Logo';
import PrimaryButton from '../../../components/PrimaryButton';
import UserNameChip from './UserNameChip';
import Header from '../../../components/Header';
import LoginText from '../../../components/LoginText';

const UserName = props => {
  const userNames = [
    'harvey.specter',
    'harveyspecter',
    'harvey-specter-2020',
    'harvey_specter!',
  ];
  const [name, setName] = useState('');

  const handleChange = text => {
    setName(text);
  };

  const handlePress = () => {
    props.navigation.navigate('interests');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.semiBoldText}>Choose a username</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.placeHolderStyle, {marginRight: 10}]}>@</Text>
            <TextInput
              style={[styles.nameInput, {textTransform: 'lowercase'}]}
              value={name}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              onChangeText={handleChange}
            />
          </View>
          <Text style={[styles.smallText, {marginTop: 20}]}>
            We have a few suggestions...
          </Text>
          {userNames.map(name => {
            return (
              <UserNameChip
                key={name}
                handleChange={handleChange}
                userName={name}
              />
            );
          })}
        </View>
        <PrimaryButton onPress={handlePress} title={'Next'} />
        <LoginText />
      </View>
    </SafeAreaView>
  );
};

export default UserName;
