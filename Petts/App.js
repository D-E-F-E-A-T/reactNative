import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from './src/Pages/SignIn/SignIn';
import SignUp from './src/Pages/SignUp/SignUp';
import Preload from './src/components/Preload/Preload';
import Tabs from './src/Pages/Tabs/Tabs';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(224, 86, 253,0.9)" />
      <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload} options={{ headerShown:false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown:false }} />
      </Stack.Navigator>


    </NavigationContainer>
    

    
  );
}

export default App;