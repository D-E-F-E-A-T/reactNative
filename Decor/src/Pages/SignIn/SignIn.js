import React from 'react';
import { View, ImageBackground, StyleSheet} from 'react-native';
import Svg, { LinearGradient, Defs, Stop, } from 'react-native-svg';
import { 
    Container, Input, ButtonSignIn, TextoButton,
    Form, FormContainer, 
} from './styles';

export default function SignIn({ navigation }) {
 return (
   <Container>
    <ImageBackground source={require('../../assets/img/fundo01.jpg')} style={styles.image}>
       <FormContainer>
       <Form>
           <Input
            placeholder="E-mail" 
           />
           <Input
            placeholder="Senha"
           />

           <ButtonSignIn onPress={()=> navigation.navigate('Profile')}>
               <TextoButton> Acessar </TextoButton>
           </ButtonSignIn>
       </Form>
       </FormContainer>
    </ImageBackground>
   </Container>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderRadius: 8,
    }
});