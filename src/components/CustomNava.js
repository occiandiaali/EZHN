import React, {useState, useEffect} from 'react';
//import {TouchableOpacity} from 'react-native';

import {useLinkTo} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Button, Divider, Menu} from 'react-native-paper';

//import {openDatabase} from 'react-native-sqlite-storage';

// initialise database
// const db = openDatabase(
//   {
//     name: 'UserDB.db',
//     location: 'default',
//   },
//   () => {},
//   error => {
//     console.log(error);
//   },
// );

export default function CustomNava() {
  const [visible, setVisible] = useState(false);
  // const [email, setEmail] = useState('');
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // const getUserData = () => {
  //   db.transaction(tx => {
  //     tx.executeSql('SELECT Email FROM Users', [], (tx, results) => {
  //       const len = results.rows.length;
  //       if (len > 0) {
  //         user = results.rows.item(0).Email;
  //         setEmail(email);
  //         setIsAuth(isAuth);
  //         console.log('Is Auth?: ' + isAuth);
  //       }
  //     });
  //   });
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

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
      {isAuth ? (
        <Menu.Item
          onPress={() => {
            linkTo('/Profile');
            closeMenu();
          }}
          title="Profile"
        />
      ) : (
        <Menu.Item
          onPress={() => {
            linkTo('/Accounts');
            closeMenu();
          }}
          title="Accounts"
        />
      )}
    </Menu>
    // <TouchableOpacity onPress={() => linkTo('/Login')}>
    //   <Icon style={{paddingRight: 25}} name={name} color="black" size={size} />
    // </TouchableOpacity>
  );
}
