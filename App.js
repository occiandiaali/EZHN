import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutMeScreen from './src/screens/AboutMeScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import SplashScreen from './src/screens/SplashScreen';

import CustomNava from './src/components/CustomNava';
import LoginScreen from './src/screens/LoginScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f9f6bb',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'black',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Accounts',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Easy Hacker News',
            headerRight: () => <CustomNava />,
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutMeScreen}
          options={{
            title: 'About Me',
          }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={({route}) => ({
            headerTitle: route.params.article.title,
          })}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'Settings'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
