import React, {useState} from 'react';

import {useLinkTo} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, Divider, Menu} from 'react-native-paper';

export default function MenuNotAuth() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const linkTo = useLinkTo();
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button mode="text" color="black" onPress={openMenu}>
          <Icon name="menu" color="#000" size={30} />
        </Button>
      }>
      <Menu.Item
        onPress={() => {
          linkTo('/About');
          closeMenu();
        }}
        title="About Me"
      />
      <Menu.Item
        onPress={() => {
          linkTo('/Settings');
          closeMenu();
        }}
        title="Settings"
      />
      <Divider />
      <Menu.Item
        onPress={() => {
          linkTo('/Accounts');
          closeMenu();
        }}
        title="Accounts"
      />
    </Menu>
  );
}
