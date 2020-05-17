import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './src/Pages/Profile/Profile';
import SignIn from './src/Pages/SignIn/SignIn';
import Details from './src/Pages/Details/Details';



const Stack = createStackNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <StatusBar backgroundColor="#ff7979"/>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown:false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
