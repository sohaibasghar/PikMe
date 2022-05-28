import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './screens';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signUp"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}>
        {screens.map(({name, component}) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
