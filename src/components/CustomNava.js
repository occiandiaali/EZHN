import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomNava({name, size, onPress}) {
  const linkTo = useLinkTo();
  return (
    <TouchableOpacity onPress={() => linkTo('/About')}>
      <Icon style={{paddingRight: 25}} name={name} color="white" size={size} />
    </TouchableOpacity>
  );
}
