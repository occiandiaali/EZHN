import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'UserDB.db'});

export default function ProfileScreen({navigation}) {
  let [inputUID, setUID] = useState('');

  const deleteUser = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Users WHERE user_id=?',
        [inputUID],
        (tx, results) => {
          console.log('Results: ', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Successful',
              'User deleted',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    setUID(inputUID);
                    navigation.navigate('Home');
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Error', 'Error');
          }
        },
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Profile</Text>
      <TouchableOpacity style={styles.btn} onPress={deleteUser}>
        <Text style={styles.btnLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  btn: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderRadius: 24,
    backgroundColor: '#000',
  },
  btnLabel: {
    color: '#fff',
    fontSize: 21,
  },
});
