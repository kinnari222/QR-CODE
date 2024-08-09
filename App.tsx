import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import GenerateQRCode from "./GenerateQRCode";
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      {/* <GenerateQRCode /> */}
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
