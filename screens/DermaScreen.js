import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function DermaScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.DermaText}>Derma</Text>
        <View style={styles.DermOptionsMainContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Scanner', {eventIds: '3'})}>
            <Text style={styles.buttonTextStyle}>Welcome Kit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Scanner', {eventIds: '1'})}>
            <Text style={styles.buttonTextStyle}>Lunch</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.DermOptionsMainContainer, {marginTop: 20}]}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Scanner', {eventIds: '4'})}>
            <Text style={styles.buttonTextStyle}>Evening Tea</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Scanner', {eventIds: '2'})}>
            <Text style={styles.buttonTextStyle}>Dinner</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DermaText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000000',
    marginTop: 20,
    marginHorizontal: 40,
    marginBottom: 30
  },
  DermOptionsMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#4187ec',
    borderWidth: 1,
    height: 50,
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#4187ec',
    fontSize: 15,
  },
});
