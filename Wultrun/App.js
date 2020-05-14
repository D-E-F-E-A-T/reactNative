import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import SignIn from './src/Pages/SignIn/SignIn';
import SignUp from './src/Pages/SignUp/SignUp';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} />
        {/* <Stack.Screen name="Route" component={Route} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} /> */}
      </Stack.Navigator>


    </NavigationContainer>
    

    
  );
}

export default App;