import {View, Keyboard, TextInput, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Logo from '../../../components/Logo';
import PrimaryButton from '../../../components/PrimaryButton';
import UserNameChip from './UserNameChip';
import LoginText from '../../../components/LoginText';

const WithEmail = props => {
  const emailDomains = [
    'Custom Provider',
    'mail.com',
    'gmail.com',
    'outlook.com',
  ];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = text => {
    setEmail(text);
  };
  const handleChangeText = text => {
    setName(text);
  };

  const handlePress = () => {
    props.navigation.navigate('password');
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.semiBoldText}>Please enter your email address</Text>
        <View>
          <TextInput
            style={[styles.nameInput, {textTransform: 'lowercase'}]}
            value={name}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            onChangeText={handleChangeText}
          />
          {email !== 'Custom Provider' && (
            <Text
              style={[
                styles.placeHolderStyle,
                {marginRight: 10},
              ]}>{`@${email}`}</Text>
          )}
        </View>
        <Text style={[styles.smallText, {marginTop: 20}]}>
          We have a few suggestions...
        </Text>
        {emailDomains.map(name => {
          return (
            <UserNameChip
              key={name}
              handleChange={handleChange}
              userName={name}
            />
          );
        })}
      </View>
      <PrimaryButton
        onPress={handlePress}
        disabled={email.length < 3}
        title={'Next'}
      />
      <LoginText {...props} />
    </View>
  );
};

export default WithEmail;
