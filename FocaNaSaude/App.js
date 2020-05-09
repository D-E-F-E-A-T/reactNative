import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import firebaseConnection from './src/firebaseConnection';

import Route from './src/Route';
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import Calculadora01 from './src/components/Calculadora01';
import Calculadora02 from './src/components/Calculadora02';
import Receitas from './src/components/Receitas/Receitas';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
console.disableYellowBox = true;

class App extends React.Component {
  render(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Route" 
            component={Route}
              options={{ 
                title: 'Foca Na Saúde',
                headerStyle: {
                  backgroundColor: '#7bed9f',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
               }}
          />
          <Stack.Screen 
            name="Tela2" 
            component={Tela2}
            options={{ 
              headerShown: false,
             }}
          />
          <Stack.Screen 
            name="Calculadora01" 
            component={Calculadora01}
            options={{ 
              headerShown: false,
             }}
          />
          <Stack.Screen 
            name="Calculadora02" 
            component={Calculadora02}
            options={{ 
              headerShown: false,
             }}
          />
          <Stack.Screen 
            name="Receitas" 
            component={Receitas}
            options={{ 
              headerShown: false,
             }}
          />
        </Stack.Navigator>

        {/* <Drawer.Navigator>
          <Drawer.Screen name="Route" component={Route} />
          <Drawer.Screen name="Tela1" component={Tela1} />
          <Drawer.Screen name="Tela2" component={Tela2} />
          <Drawer.Screen name="Calculadora01" component={Calculadora01} />
          <Drawer.Screen name="Calculadora02" component={Calculadora02} />
          <Drawer.Screen name="Receitas" component={Receitas} />
        </Drawer.Navigator> */}

       

      </NavigationContainer>
      

      
    );
  }
}

export default App;