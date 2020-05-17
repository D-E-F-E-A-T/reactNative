import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';

export default function Details({ navigation }) {
 return (
   <Container>
       <Text> Details </Text>
       <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
         <Text> Voltar </Text>
       </TouchableOpacity>
   </Container>
  );
}