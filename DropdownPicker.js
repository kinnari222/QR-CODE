import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropdownPicker = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('breakfast');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedOption}
        style={styles.picker}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Gifts" value="gifts" />
      </Picker>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate("Scanner", {selectedOption})}>
      <Text>Scan Here!!</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  picker: {
    height: 50,
    width: 200,
    borderColor: 'red',
  },
});

export default DropdownPicker;
