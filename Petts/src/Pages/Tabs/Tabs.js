import React, { useState } from 'react';
import Painel from './Painel/Painel';
import Find from './Find/Find';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';

import { 
  Container, TabsContainer, TabsBottom, ContainerComponents,
  ButtonBottom, 
} from './styles';


export default function Tabs() {

  const[screen, setScreen] = useState('');
  function callScrren(choice){
    if(choice === 1){
      return <Painel />
    } else if(choice === 2) {
      return <Find />
    }
  }
 return (
   <Container>
    <TabsContainer>

      {callScrren()}




      <TabsBottom>
        <ContainerComponents>
          <ButtonBottom onPress={()=> callScrren(1)}>
            <Ionicons name="ios-easel" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom onPress={()=> callScrren(2)}>
            <Ionicons name="ios-search" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom>
            <Ionicons name="ios-paw" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom>
            <Ionicons  name="ios-contact" color="#FFF" size={30} />
          </ButtonBottom>
        </ContainerComponents>
          
        </TabsBottom>
      </TabsContainer>
   </Container>
  );
}