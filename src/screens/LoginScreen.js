import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={styles.container_log}>
        <Image
          style={styles.image}
          source={require('../res/images/ehn_logo.png')}
          accessibilityLabel="Easy Hacker News"
        />
        <View style={styles.inputView}>
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
        </View>
        {/* <TouchableOpacity>
          <Text style={styles.reg_button}>No Account? Register</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.loginBtn}>
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
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.regText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container_log: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  container_reg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
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
    height: 30,
    marginBottom: 30,
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
