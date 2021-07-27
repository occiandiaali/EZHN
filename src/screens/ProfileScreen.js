import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import {List, Switch, Divider} from 'react-native-paper';

import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({name: 'UserDB.db'});

export default function ProfileScreen({navigation}) {
  let [inputUID, setUID] = useState('');

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
      <List.Section>
        <List.Subheader>User Settings</List.Subheader>
        <List.Item title="Dark Mode" left={() => <List.Icon icon="folder" />} />
        <List.Item title="Dark Mode" left={() => <List.Icon icon="folder" />} />
      </List.Section>

      <Divider
        style={{
          width: '80%',
          height: 1,
          alignSelf: 'center',
          backgroundColor: 'gray',
        }}
      />

      <List.Section>
        <List.Subheader>App Settings</List.Subheader>
        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="brightness-6" />}
        />
        <List.Item title="Dark Mode" left={() => <List.Icon icon="folder" />} />
      </List.Section>

      <Divider
        style={{
          width: '80%',
          height: 1,
          alignSelf: 'center',
          backgroundColor: 'gray',
        }}
      />

      <View style={{padding: 13, flexDirection: 'row'}}>
        <Text style={{marginRight: 25, fontSize: 17}}>Dark Mode</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <Divider
        style={{
          width: '80%',
          height: 1,
          alignSelf: 'center',
          backgroundColor: 'gray',
        }}
      />
      <List.Section>
        <List.Item title="Log Out" left={() => <List.Icon icon="logout" />} />
      </List.Section>

      {/* <TouchableOpacity style={styles.btn} onPress={deleteUser}>
        <Text style={styles.btnLabel}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
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
