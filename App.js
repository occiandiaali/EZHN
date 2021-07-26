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
import ProfileScreen from './src/screens/ProfileScreen';
import UserCreds from './src/auth/UserCreds';
import {Image} from 'react-native';

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
            elevation: 3,
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
          name="Accounts"
          component={UserCreds}
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
            headerLeft: () => (
              <Image
                style={{width: 50, height: 50, marginLeft: 13}}
                source={require('./src/res/images/ehn_logo.png')}
              />
            ),
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
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
