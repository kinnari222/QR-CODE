import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SuccessScreen = ({navigation}) => {
  return (
    <View style={styles.successScreenContainer}>
        <Text style={styles.messageTextStyle}>Hoorray! User has</Text>
        <Text style={styles.messageTextStyle}>successfully redeemed</Text>
        <Text style={styles.messageTextStyle}>the coupon!</Text> 
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('DermaScreen')}>
        <Text style={styles.buttonTextStyle}>Scan Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  successScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageTextStyle: {
    color: 'gray',
    fontSize: 28,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
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
    fontWeight: 'bold'
  },
});

export default SuccessScreen;
