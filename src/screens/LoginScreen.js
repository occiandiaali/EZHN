import React, {useState, useEffect} from 'react';
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

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 25,
  };

  // open database
  const db = openDatabase(
    {
      name: 'UserDB.db',
      location: 'default',
    },
    () => {},
    error => {
      console.log(error);
    },
  );

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, Password TEXT);',
      );
    });
  };

  useEffect(() => {
    createTable();
  }, []);

  const regUser = async () => {
    if (!email && !password) {
      Alert.alert('Fields required', 'We need ALL fields!');
      return;
    }

    await db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Users (Email, Password) VALUES (?, ?)',
        [email, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            setEmail(email);
            setPassword(password);
            // setFirstname(firstname);
            // setLastname(lastname);
            Alert.alert(
              'Success',
              'You are now registered!',
              [
                {
                  text: 'Nice',
                  onPress: () =>
                    navigation.navigate('Home', {
                      user_email: email,
                      // user_firstname: firstname,
                      // user_lastname: lastname,
                    }),
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Failed', 'Could not register you!');
          }
        },
      );
    });
  };

  const loginUser = () => {
    if (!email && !password) {
      Alert.alert('Attention', 'Complete ALL fields!');
      return;
    }
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT Email, Password FROM Users',
          [],
          (tx, results) => {
            const len = results.rows.length;
            if (len > 0) {
              user = results.rows.item(0).Email;
              setEmail(email);
              setPassword(password);
              setIsAuth(isAuth);
              console.log('Is Auth?: ' + isAuth);
            }
          },
        );
      });
    } catch (error) {
      console.log(error);
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
          <LoginComponent
            onChangeText={email => setEmail(email)}
            placeholder="you@example.com"
          />
          <LoginComponent
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            placeholder="your password"
          />
          {/* <LoginComponent placeholder="your first name" />
          <LoginComponent placeholder="your last name" /> */}
          <Mybutton title="SIGN UP" customClick={regUser} />
        </Modal>
      </Portal>
      {/* <View style={styles.container_log}> */}
      <LoginComponent placeholder="Email" onChangeText={email => setEmail()} />
      <LoginComponent placeholder="Password" secureTextEntry={true} />
      <Mybutton title="LOGIN" />
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
