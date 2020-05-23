import React from 'react';
import { View, Text } from 'react-native';

export default function Profile({ navigation }) {
 return (
   <View>
       <Text onPress={()=> navigation.navigate("SignIn")}> Teste </Text>
   </View>
  );
}