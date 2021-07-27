import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {List, Switch, Divider} from 'react-native-paper';

export default function SettingsScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({});
