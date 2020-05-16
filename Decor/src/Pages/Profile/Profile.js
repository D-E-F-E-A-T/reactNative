import React from 'react';
import { 
  Rect, Circle, Svg, Ellipse, LinearGradient,
  Defs, Stop,
} from 'react-native-svg';

import { View } from 'react-native';
import { Container } from './styles'

export default function Profile() {
 return (
   <Container>
       <Svg height="200" width="100%">
            <Rect
            x="0"
            y="0"
            width="100%"
            height="200"
            strokeWidth="2"
            fill="#f0932b"
           />

        <Ellipse
          cx="300"
          cy="200"
          rx="120"
          ry="60"
          fill="#FFF"
        />


       </Svg>

       <Svg>
          
       <Ellipse
            cx="60"
            cy="2"
            rx="120"
            ry="60"
            strokeWidth="2"
            fill="#f0932b"
           />
       </Svg>

   </Container>
  );
}