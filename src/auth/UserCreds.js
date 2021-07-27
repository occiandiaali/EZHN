import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
  Platform,
} from 'react-native';

import {TextInput, Button, Divider, Modal, Portal} from 'react-native-paper';

import {openDatabase} from 'react-native-sqlite-storage';

// open the db
const db = openDatabase(
  {
    name: 'UserDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export default function UserCreds({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
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

  // create db users table
  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);',
      );
    });
  };

  useEffect(() => {
    createTable();
    console.log(`Is Authed: ${isAuth}`);
  }, []);

  // Authentication methods - for Login and Register
  const userLogin = async () => {
    if (!userEmail || !userPassword) {
      Alert.alert('Empty Field(s)', 'All fields are required.');
      return;
    }
    await db.transaction(txn => {
      txn.executeSql(
        'SELECT email, password FROM Users',
        [],
        (txn, results) => {
          const len = results.rows.length;
          if (!len) {
            Alert.alert('Attention', 'This account does not exist!');
          }
          if (len > 0) {
            const row = results.rows.item(0);
            if (userPassword === row.password) {
              setIsAuth(!isAuth);
              console.log(`Login auth: ${isAuth}`);
              navigation.navigate('Home', {k: 'true'});
            } else {
              Alert.alert('Alert!', 'Authentication Failed!');
            }
          }
        },
      );
    });
  };

  const userRegister = async () => {
    if (!email || !password) {
      Alert.alert('Attention!', 'Complete ALL fields!');
      return;
    }
    if (confirmPassword !== password) {
      Alert.alert('Attention!', 'Passwords do not match!');
      return;
    }
    try {
      await db.transaction(txn => {
        txn.executeSql(
          'SELECT * FROM Users WHERE email= ?',
          [email],
          (txn, results) => {
            const len = results.rows.length;
            if (len > 0) {
              Alert.alert('Hey!', 'Account already exists! :( ');
              return;
            } else {
              'INSERT INTO Users (email, password) VALUES (?, ?)',
                [email, password],
                (txn, results) => {
                  const len = results.rows.length;
                  if (results.rowsAffected > 0) {
                    Alert.alert('Success!', 'You are now registered!');
                  } else {
                    Alert.alert('Oops!', 'Error: Could not register you! :( ');
                  }
                };
            }
          },
        );
        // txn.executeSql(
        //   'INSERT INTO Users (email, password) VALUES (?, ?)',
        //   [email, password],
        //   (txn, results) => {
        //     const len = results.rows.length;
        //     if (results.rowsAffected > 0) {
        //       Alert.alert('Success!', 'You are now registered!');
        //     } else {
        //       Alert.alert('Oops!', 'Error: Could not register you! :( ');
        //     }
        //   },
        // );
      });
      setIsAuth(!isAuth);
      navigation.navigate('Home', {k: 'true'});
    } catch (error) {
      console.log(`DB Insertion err: ${error} `);
    }
  };

  // ============================================

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image
        style={styles.image}
        source={require('../res/images/ehn_logo.png')}
        accessibilityLabel="Easy Hacker News"
      />
      <Portal>
        <Modal
          visible={isModalVisible}
          contentContainerStyle={containerStyle}
          onDismiss={hideModal}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={value => setConfirmPassword(value)}
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
        onChangeText={value => setUserEmail(value)}
      />
      <TextInput
        label="Password"
        value={userPassword}
        secureTextEntry={true}
        onChangeText={value => setUserPassword(value)}
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