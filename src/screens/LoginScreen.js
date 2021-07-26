import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {Modal, Portal} from 'react-native-paper';

import {openDatabase} from 'react-native-sqlite-storage';
import LoginComponent from '../components/LoginComponent';
import Mybutton from '../components/Mybutton';

//const db = openDatabase({name: 'UserDB.db'});

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
  };

  const reg_user = () => {
    if (!email || !password) {
      Alert.alert('Fields required', 'We need ALL fields!');
      return;
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        style={styles.image}
        source={require('../res/images/ehn_logo.png')}
        accessibilityLabel="Easy Hacker News"
      />
      <Portal>
        <Modal
          visible={isModalVisible}
          contentContainerStyle={containerStyle}
          style={{padding: 25}}
          onDismiss={hideModal}>
          <LoginComponent placeholder="you@example.com" />
          <LoginComponent placeholder="your password" />
          <LoginComponent placeholder="your username" />
          <Mybutton title="SIGN UP" />
        </Modal>
      </Portal>
      {/* <View style={styles.container_log}> */}
      <LoginComponent placeholder="Email" />
      <LoginComponent placeholder="Password" />
      <Mybutton title="LOGIN" customClick={reg_user} />
      <TouchableOpacity onPress={showModal}>
        <Text style={styles.reg_button}>No Account? Register</Text>
      </TouchableOpacity>
      {/* <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="you@emailaddress.com"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="your password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View> */}
      {/* <TouchableOpacity>
          <Text style={styles.reg_button}>No Account? Register</Text>
        </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>OR</Text>

      <View style={styles.container_reg}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter email"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="enter password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={reg_user}>
          <Text style={styles.regText}>SIGN UP</Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  container_log: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
    marginBottom: 20,
  },
  container_reg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 10,
    alignItems: 'center',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    backgroundColor: '#FF1493',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  reg_button: {
    fontSize: 20,
    height: 30,
    marginTop: 30,
  },
  regText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  txt: {
    alignSelf: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
  },
  TextInput: {
    height: 40,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
