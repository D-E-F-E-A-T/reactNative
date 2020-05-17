import React from 'react';
import { 
  Rect, Circle, Svg, Ellipse, LinearGradient,
  Defs, Stop, Button,
} from 'react-native-svg';

import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ContainerCenter, Card, } from './styles'


export default function Profile() {
 return (
   <Container>
      <View style={{ width:'100%', height:'30%', backgroundColor:'#FFF' }}>
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