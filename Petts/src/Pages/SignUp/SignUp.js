import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import { Container, Input, Button, TextoLogin, TextoDica, ButtonReturn } from './styles';

const SignIn = ({ navigation }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
  return(
      <>
        
        <ImageBackground source={require('../../assets/img/dogecat.jpg')} style={styles.image}>
            
            <Container>
                <ButtonReturn onPress={()=> navigation.navigate('SignIn') }>
                      <View style={{flexDirection:'row'}}>
                        <Icon name="md-arrow-back" size={30} color="#FFF" />
                        <Text style={{color:'#FFF', fontSize: 20, marginLeft: 10, fontWeight:'bold'}}> Petts </Text>
                      </View>
                      {/* ios-arrow-round-back ios-arrow-back  */}
                </ButtonReturn>
                <TextoDica>_______ Preencha os campos: _______</TextoDica>
                <Input placeholder="Nome" />
                <Input placeholder="email@email.com" />
                <Input placeholder="Senha" />

                <Button onPress={()=> navigation.navigate('SignUp')}>
                    <TextoLogin> Cadastrar </TextoLogin>
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