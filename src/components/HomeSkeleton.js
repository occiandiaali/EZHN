import {styles} from 'ansi-colors';
import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const SKELETON_SPEED = 1500;
export const SKELETON_BG = '#dddddd';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;

const {width, height} = Dimensions.get('window');

export default function HomeSkeleton() {
  return (
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.skMainView}></View>
      </View>
      <View style={styles.skMainView} />
    </SkeletonPlaceholder>
  );
}

const styles = StyleSheet.create({
  skMainView: {
    width: width / 1.4,
    margin: moderateScale(8),
    borderWidth: 0,
    height: height / 16,
    elevation: moderateScale(5),
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
    borderRadius: 5,
  },
});
