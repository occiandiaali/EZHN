import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutMeScreen from './src/screens/AboutMeScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import SplashScreen from './src/screens/SplashScreen';

import CustomNava from './src/components/CustomNava';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Easy Hacker News',
            headerRight: () => <CustomNava name="menu" size={30} />,
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
        <Stack.Screen name="Splash" component={SplashScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
