import React from 'react';

import {StyleSheet} from 'react-native';

export const LoadingIndicatorView = () => (
  <ActivityIndicator
    color="#ff0000"
    size="large"
    style={styles.ActivityIndicatorStyle}
  />
);

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
