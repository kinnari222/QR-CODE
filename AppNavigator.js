import React from 'react';
import {View, Text} from 'react-native';
import DropdownPicker from './DropdownPicker';
import Scanner from './Scanner';
import SuccessScreen from './SuccessScreen';
import ErrorScreen from './ErrorScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DropdownPicker" component={DropdownPicker} options={{headerShown: false}}/>
        <Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false}}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ErrorScreen" component={ErrorScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
