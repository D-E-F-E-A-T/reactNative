import React, { useState } from 'react';
import { 
  Rect, Circle, Svg, Ellipse, LinearGradient,
  Defs, Stop, 
} from 'react-native-svg';

import { View, Text, TouchableOpacity,   } from 'react-native';
import { 
  Container, ContainerCenter, Card, ContainerHeader,
  BarTop, TabButton, TextTabButton, 
} from './styles'


export default function Profile() {
  const[btn1, setBtn1] = useState('rgba(255, 121, 121,0.7)');
  const[btn2, setBtn2] = useState('#FFF');
  const[btn3, setBtn3] = useState('#FFF');

  function changeBackground(color){

    if(color === 'btn1'){
      setBtn1('rgba(255, 121, 121,0.7)');
      setBtn2('#FFF');
      setBtn3('#FFF');
    } else if(color === 'btn2'){
      setBtn2('rgba(255, 121, 121,0.7)');
      setBtn1('#FFF');
      setBtn3('#FFF');
    } else if(color === 'btn3'){
      setBtn3('rgba(255, 121, 121,0.7)');
      setBtn2('#FFF');
      setBtn1('#FFF');
    }
  }
 return (
   <Container>
      <View style={{ width:'100%', height:'30%', backgroundColor:'#FFF' }}>
        <ContainerHeader>
          <BarTop>
            <TabButton style={{ backgroundColor: btn1 }} onPress={()=> changeBackground('btn1')} underlayColor='rgba(255, 121, 121,0.7)'>
              <TextTabButton> Home </TextTabButton>
            </TabButton>

            <TabButton style={{ backgroundColor: btn2 }} onPress={()=> changeBackground('btn2')} underlayColor='rgba(255, 121, 121,0.7)'>
              <TextTabButton> File </TextTabButton>
            </TabButton>

            <TabButton style={{ backgroundColor: btn3 }} onPress={()=> changeBackground('btn3')} underlayColor='rgba(255, 121, 121,0.7)'>
              <TextTabButton> Stop </TextTabButton>
            </TabButton>
          </BarTop>
        </ContainerHeader>
        <Svg>

          <Ellipse
            cx="50"
            cy="60"
            rx="160"
            ry="130"
            fill="#ff7979"
          />
          
          
          <Rect
            x="0"
            y="0"
            width="100%"
            height="70%"
            fill="#ff7979"
          />

          <Ellipse
            cx="305"
            cy="150"
            rx="130"
            ry="50"
            fill="#FFF"
          />
          
          
        </Svg>
      </View>
     
      <ContainerCenter>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection:'row' }}>

        <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity>
          <Card>
            <Text> Teste </Text>
          </Card>
          </TouchableOpacity>
        </View>
      </ContainerCenter>
   </Container>
  );
}