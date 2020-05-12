import React, { useState, useEffect } from 'react';
import Painel from './Painel/Painel';
import Find from './Find/Find';
import Publishis from './Publishis/Publishis';
import Profile from './Profile/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';

import { 
  Container, TabsContainer, TabsBottom, ContainerComponents,
  ButtonBottom, ContainerCentral,
} from './styles';


export default function Tabs() {

  useEffect(()=>{
    setScreen(1)
  },[]);

  const[screen, setScreen] = useState(1);

  function callScrren(choice){

    setScreen(choice)
    
  }

 return (
   <Container>

    {
      screen === 1 ? <Painel /> : <></>
    }

    {
      screen === 2 ? <Find /> : <></>
    }

    {
      screen === 3 ? <Publishis /> : <></>
    }

    {
      screen === 4 ? <Profile /> : <></>
    }

    {/* <ContainerCentral> */}
     
    <TabsContainer>



      <TabsBottom>
        <ContainerComponents>
          <ButtonBottom onPress={()=> callScrren(1)}>
            <Ionicons name="ios-easel" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom onPress={()=> callScrren(2)}>
            <Ionicons name="ios-search" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom onPress={()=> callScrren(3)}>
            <Ionicons name="ios-paw" color="#FFF" size={30} />
          </ButtonBottom>

          <ButtonBottom onPress={()=> callScrren(4)}>
            <Ionicons  name="ios-contact" color="#FFF" size={30} />
          </ButtonBottom>
        </ContainerComponents>
          
        </TabsBottom>
      </TabsContainer>
      {/* </ContainerCentral> */}
   </Container>
  );
}