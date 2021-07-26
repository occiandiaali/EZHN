import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoginComponent({
  text,
  placeholder,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        value={text}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: 250,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
