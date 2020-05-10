import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import { Container, Input, Button, TextoLogin, TextoDica } from './styles';

const SignIn = ({ navigation }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
  return(
      <>
        
        <ImageBackground source={require('../../assets/img/dogecat.jpg')} style={styles.image}>
            
            <Container>
                <Input placeholder="email@email.com" />
                <Input placeholder="***************" />
                <Button>
                    <TextoLogin> Login </TextoLogin>
                </Button>

                
                <TextoDica>_______ Não possui conta? _______</TextoDica>

                <Button onPress={()=> navigation.navigate('SignUp')}>
                    <TextoLogin> Criar Conta </TextoLogin>
                </Button>
            </Container>
        </ImageBackground>
      </>
  );
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
  });

export default SignIn;

// require('../../assets/img/dogecat.jpg')