import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TextInput, Button, Divider} from 'react-native-paper';

export default function LogRegScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
