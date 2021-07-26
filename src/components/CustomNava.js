import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomNava({name, size, onPress}) {
  const linkTo = useLinkTo();
  return (
    <TouchableOpacity onPress={() => linkTo('/Login')}>
      <Icon style={{paddingRight: 25}} name={name} color="black" size={size} />
    </TouchableOpacity>
  );
}
