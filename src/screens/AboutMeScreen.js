import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AboutMeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Occian F. Diaali</Text>
      <Text style={styles.sub}>Mobile &amp; Web Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  heading: {
    fontSize: 55,
    color: 'gray',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  sub: {
    color: '#ff0000',
    fontSize: 27,
  },
});
