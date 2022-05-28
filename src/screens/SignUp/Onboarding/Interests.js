import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import PrimaryButton from '../../../components/PrimaryButton';
import Logo from '../../../components/Logo';
import InterestChip from './InterestChip';
import LoginText from '../../../components/LoginText';
import Header from '../../../components/Header';

const feedTypes = [
  'abstract',
  'animal',
  'architecture',
  'art',
  'business',
  'colorful',
  'food',
  'interior',
  'minimal',
  'nature',
  'plant',
  'portrait',
  'technology',
  'texture',
  'wallpaper',
  'pets',
];

const Interests = props => {
  const [interests, setInterests] = useState({});
  const handlePress = () => {
    props.navigation.navigate('welcome');
  };

  const handleSelectInterests = interest => {
    if (interests[interest]) {
      setInterests({
        ...interests,
        [interest]: false,
      });
    } else {
      setInterests({
        ...interests,
        [interest]: true,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.semiBoldText}>Now make your feed unique</Text>
          <View style={styles.flexWrapContainer}>
            {feedTypes.map(feed => {
              return (
                <InterestChip
                  key={feed}
                  onPress={() => {
                    handleSelectInterests(feed);
                  }}
                  selected={interests[feed]}
                  title={feed}
                />
              );
            })}
          </View>
        </View>
        <PrimaryButton onPress={handlePress} title={'Next'} />
        <LoginText {...props} />
      </View>
    </SafeAreaView>
  );
};

export default Interests;
