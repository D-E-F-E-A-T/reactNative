import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { 
  Container, Header, ContainerCard, Card, 
  TabTopButton, ButtonTabTopLeft, ButtonTabTopRight,
  TextButtonTop, Input,
} from './styles';

import Dados from '../../components/Dados/Dados';

export default function Profile({ navigation }) {

  const[fundo1, setFundo1] = useState('#FFB333');
  const[fundo2, setFundo2] = useState('');
  const[visible, setVisible] = useState(true);

  function changeBackground(background){

    if(background === '1') {
      setFundo1("#FFB333");
      setFundo2("#FFF");

      setVisible(true);
    } else if(background === '2'){
      setFundo2("#FFB333");
      setFundo1("#FFF");

      setVisible(false);
    }
  }

 return (
   <Container>
       <Header>

       </Header>

       <ContainerCard>
        <Card>
          <TabTopButton>
            <ButtonTabTopLeft style={{ backgroundColor: fundo1 }} onPress={()=> changeBackground('1')}>
              <TextButtonTop> Teste </TextButtonTop>
            </ButtonTabTopLeft>

            <ButtonTabTopRight style={{ backgroundColor: fundo2 }} onPress={()=> changeBackground('2')}>
              <TextButtonTop> Teste </TextButtonTop>
            </ButtonTabTopRight>
          </TabTopButton>

          {
            visible === true ? <Dados /> : <></>
          }
        </Card>
       </ContainerCard>
   </Container>
  );
}