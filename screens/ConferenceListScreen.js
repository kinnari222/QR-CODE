import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function ConferenceListScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.DermaText}>Active Conferences</Text>
      <TouchableOpacity
        style={styles.conferenceItem}
        onPress={() => navigation.navigate('DermaScreen')}>
        <Text style = {styles.textStyle}>Derma - (1st-4th Aug)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conferenceItem}>
        <Text style = {styles.textStyle}>Diabetes - (1st-4th Aug)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conferenceItem}>
        <Text style = {styles.textStyle}>Ortho - (1st-4th Aug)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  DermaText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000000',
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 30
  },
  conferenceItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 15,
    color: '#000000'
  }
});
