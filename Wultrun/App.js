import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





import SignIn from './src/Pages/SignIn/SignIn';
import SignUp from './src/Pages/SignUp/SignUp';
import Profile from './src/Pages/Profile/Profile';
import ConfigProfile from './src/Pages/ConfigProfile/ConfigProfile';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'ConfigProfile') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#2BD0FF',
      inactiveTintColor: '#2FAEFF',
    }}
  >
    <Tab.Screen name="Profile" component={Profile}/>
    <Tab.Screen name="ConfigProfile" component={ConfigProfile} />
  </Tab.Navigator>
  );
}

// options={{ headerShown:false }} 

function App() {

  console.disableYellowBox="true"

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2FAEFF" />
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown:false }} />
      </Stack.Navigator>


    </NavigationContainer>
    

    
  );
}

export default App;