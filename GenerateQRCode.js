import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GenerateQRCode = () => {
  const [msg, setMsg] = useState('kinnari');
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="type any message"
        value={msg}
        onChangeText={txt => {
            // if(txt === '') {
            //     setMsg(" ")
            // } else {
            // setMsg(txt)}
            // }
            setMsg(txt)
        }}
        style={{
          width: '90%',
          marginTop: 50,
          height: 50,
          borderRadius: 20,
          alignSelf: 'center',
          paddingLeft: 30,
          borderWidth: 0.5,
        }}
      />
      {/* <TouchableOpacity style={{width: '90%', height: 50, backgroundColor: 'purple', borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 50}}>
        <Text style = {{color: 'white'}}>Generate QR Code</Text>
      </TouchableOpacity> */}
      <View
        style={{
          marginTop: 50,
          width: '100%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {msg ? 
        <QRCode value={msg} color="white" backgroundColor="black" size={200} />
        :
        null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainQRView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GenerateQRCode;
