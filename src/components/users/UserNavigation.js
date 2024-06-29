import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreens from '../../login';
import SignUpScreens from '../../signup';

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreens" component={LoginScreens} />
      <Stack.Screen name="SignUpScreens" component={SignUpScreens} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
