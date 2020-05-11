import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCOmmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import { 
  Container, Input, Button, TextoLogin, TextoDica, ButtonReturn,
  ContainerCentro, 
} from './styles';

const SignIn = ({ navigation }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
  return(
      <>
        
        <ImageBackground source={require('../../assets/img/cat.jpg')} style={styles.image}>
            
            <Container>
                <ButtonReturn onPress={()=> navigation.navigate('SignIn') }>
                  <Icon name="md-arrow-back" size={30} color="#FFF" />
                </ButtonReturn>

                <ContainerCentro>
                  <View style={{ flexDirection:'row' }}>
                    <MaterialCOmmunityIcons style={{marginRight:15}} name="dog" size={50} color="rgba(128,128,128,0.5)" />
                    <MaterialCOmmunityIcons name="cat" size={50} color="rgba(128,128,128,0.5)" />
                  </View>

                  <TextoDica> Preencha os campos: </TextoDica>
                  <Input placeholder="Nome" />
                  <Input placeholder="email@email.com" />
                  <Input placeholder="Senha" />

                  <Button onPress={()=> navigation.navigate('SignUp')}>
                      <TextoLogin> Cadastrar </TextoLogin>
                  </Button>
                </ContainerCentro>
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