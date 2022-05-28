import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WithPhone from './WithPhone';
import WithEmail from './WithEmail';

const Tab = createMaterialTopTabNavigator();
function TopBarNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00A0FF',
        tabBarInactiveTintColor: '#02020440',
        tabBarIndicatorStyle: {backgroundColor: '#00A0FF'},
      }}
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen name="Phone Number" component={WithPhone} />
      <Tab.Screen name="Email" component={WithEmail} />
    </Tab.Navigator>
  );
}

export default TopBarNavigation;
