import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoMainContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <Text style={styles.titleStyle}>User ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        // value={email}
        // onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.titleStyle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        // value={password}
        // onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ConferenceListScreen')}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logoMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  titleStyle: {
    fontSize: 15,
    color: '#000000',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000000',
  },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#4187ec',
    height: 50,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
