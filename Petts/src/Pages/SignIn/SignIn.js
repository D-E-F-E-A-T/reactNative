import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground, Text, View, StyleSheet,  } from 'react-native';


import { 
  Container, Input, Button, TextoLogin, TextoDica,
  ContainerInputIcon, TextoTitulo, FundoGradient,
 } from './styles';

const SignIn = ({ navigation }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
  return(
      <>
        
        <ImageBackground source={require('../../assets/img/dogecat.jpg')} style={styles.image}>
            
            <Container>
                <Icon name="ios-paw" size={80} color="rgba(128,128,128,0.5)" />
                <TextoTitulo> Petts </TextoTitulo>

                <View style={{ flexDirection:'row' }}>
                  <ContainerInputIcon>
                    <MaterialCommunityIcons name="email-outline" size={30} color="rgba(0,0,0,0.5)" />
                  </ContainerInputIcon>
                  <Input placeholder="email@email.com" />
                  
                </View>

                <View style={{ flexDirection:'row' }}>
                  <ContainerInputIcon>
                    <MaterialCommunityIcons name="key-variant" size={30} color="rgba(0,0,0,0.5)" />
                  </ContainerInputIcon>
                  <Input placeholder="***************" />
                  
                </View>

                <Button>
                  {/* <FundoGradient> */}
                    <TextoLogin> Login </TextoLogin>
                  {/* </FundoGradient> */}
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