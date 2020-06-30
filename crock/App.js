import * as React from 'react';
import { View, StatusBar, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SignUp from './src/Pages/SignUp/SignUp';
import SignIn from './src/Pages/SignIn/SignIn';
import ScreenEnpreendedor from './src/Pages/ScreenEnpreendedor/';
import FirstLoad from './src/components/FirstLoad';
import ScreenFirstEnter from './src/components/ScreenFirstEnter/';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// export function Tabs(){
//   return(
    
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Profile') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Cards') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Cards" component={Cards} />
//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFA500" />
      <Stack.Navigator>
      <Stack.Screen name="FirstLoad" component={FirstLoad} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenFirstEnter" component={ScreenFirstEnter} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenEnpreendedor" component={ScreenEnpreendedor} options={{ headerShown: false }}  />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}  />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
    

    
  );
}

export default App;