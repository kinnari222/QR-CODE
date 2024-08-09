import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';

const Scanner = ({navigation, route}) => {
  const { selectedOption } = route.params;
  console.log('Selected Option:', selectedOption);
  
  const [scannedData, setScannedData] = useState('');

  const onSuccess = async e => {
    const scannedCode = e.data;
    setScannedData(scannedCode);

    try {
      const userId = '1';
      const eventId = '1';
      const apiUrl = `https://4cdd-2405-201-1007-714a-39e2-896f-b381-aaaa.ngrok-free.app/api/users/2/events/2`;
      console.log('apiUrl', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          Accept: 'application/hal+json',
          'Content-Type': 'application/json',
        },
      });

      console.log('res===', response);

      if (response.ok) {
        navigation.navigate('SuccessScreen');
      } else {
        navigation.navigate('ErrorScreen');
      }
    } catch (error) {
      console.error('Error:', error);
      navigation.navigate('ErrorScreen');
    }
  };

  return (
    <QRCodeScanner
      reactivate={true}
      reactivateTimeout={500}
      showMarker={true}
      onRead={e => onSuccess(e)}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={<></>}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>
            {scannedData
              ? `Scanned Data: ${scannedData}`
              : 'No data scanned yet'}
          </Text>
          <Text style={styles.selectedOptionText}>
            Selected Option: {selectedOption}
          </Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
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

export default Scanner;
