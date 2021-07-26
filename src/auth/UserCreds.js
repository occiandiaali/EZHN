import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';

import {TextInput, Button, Divider, Modal, Portal} from 'react-native-paper';

export default function UserCreds() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    width: '100%',
    height: '70%',
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 25,
  };

  // Authentication methods - for Login and Register
  const userLogin = () => {
    if (!userEmail || !userPassword) {
      Alert.alert('Empty Field(s)', 'All fields are required.');
      return;
    }
  };

  const userRegister = () => {
    if (!email || !password) {
      Alert.alert('Attention', 'Complete ALL fields!');
      return;
    }
  };

  // ============================================

  return (
    <KeyboardAvoidingView behavior="padding">
      <Image
        style={styles.image}
        source={require('../res/images/ehn_logo.png')}
        accessibilityLabel="Easy Hacker News"
      />
      <Portal>
        <Modal
          visible={isModalVisible}
          contentContainerStyle={containerStyle}
          // style={{padding: 25}}
          onDismiss={hideModal}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
          <Button
            style={{
              width: '90%',
              height: 40,
              borderRadius: 25,
              margin: 17,
            }}
            mode="contained"
            onPress={userRegister}>
            Sign Up
          </Button>
        </Modal>
      </Portal>

      <TextInput
        style={{marginTop: 35}}
        label="Email"
        value={userEmail}
        onChangeText={userEmail => setUserEmail(userEmail)}
      />
      <TextInput
        label="Password"
        value={userPassword}
        secureTextEntry={true}
        onChangeText={userPassword => setUserPassword(userPassword)}
      />
      <Button
        style={{
          width: '90%',
          height: 40,
          borderRadius: 25,
          margin: 17,
        }}
        mode="contained"
        onPress={userLogin}>
        Sign In
      </Button>
      <Divider />
      <TouchableOpacity onPress={showModal} style={styles.signup_container}>
        <Text style={styles.signup_label}>No Account? Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
  },
  signup_container: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup_label: {
    fontSize: 23,
    color: 'gray',
  },
});
