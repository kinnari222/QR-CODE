import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import DropdownPicker from './screens/DropdownPicker';
import LoginScreen from './screens/LoginScreen';
import Scanner from './screens/Scanner';
import SuccessScreen from './screens/SuccessScreen';
import DermaScreen from './screens/DermaScreen';
import ConferenceListScreen from './screens/ConferenceListScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logo from './assets/images/logo.png';
import ErrorScreen from './screens/ErrorScreen';

const Stack = createNativeStackNavigator();

const LogoHeader = () => (
  <View style={styles.headerRight}>
    <Image source={logo} style={styles.logo} />
  </View>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConferenceListScreen"
          component={ConferenceListScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
        <Stack.Screen
          name="DropdownPicker"
          component={DropdownPicker}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
        <Stack.Screen
          name="DermaScreen"
          component={DermaScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
         <Stack.Screen
          name="ErrorScreen"
          component={ErrorScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => <LogoHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    
  },
  logo: {
    width: 60, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },
});

export default AppNavigator;
