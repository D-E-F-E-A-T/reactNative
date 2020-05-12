import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '../../services/firebaseConnection';

import { ImageBackground, Text, View, StyleSheet,  ActivityIndicator } from 'react-native';


import { 
  Container, Input, Button, TextoLogin, TextoDica,
  ContainerInputIcon, TextoTitulo, FundoGradient,
 } from './styles';

const SignIn = ({ navigation }) => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[visibleActivity, setVisibleActivity] = useState(false);

  async function handleSubmit(){
    if(email !== '' && password !== ''){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error)=> {
        alert(error.code);
      });
    }

    setVisibleActivity(true);

    setTimeout(()=>{
      setVisibleActivity(false)
    },5000);
  }

  return(
      <>
        
        <ImageBackground source={require('../../assets/img/dogecat.jpg')} style={styles.image}>
            
            <Container>
                <Icon name="ios-paw" size={80} color='rgba(224, 86, 253,0.5)' />
                <TextoTitulo> Petts </TextoTitulo>

                <View style={{ flexDirection:'row' }}>
                  <ContainerInputIcon>
                    <MaterialCommunityIcons name="email-outline" size={30} color="rgba(0,0,0,0.5)" />
                  </ContainerInputIcon>
                  <Input 
                    placeholder="email@email.com"
                    value={email}
                    onChangeText={(email)=> setEmail(email)}
                  />
                  
                </View>

                <View style={{ flexDirection:'row' }}>
                  <ContainerInputIcon>
                    <MaterialCommunityIcons name="key-variant" size={30} color="rgba(0,0,0,0.5)" />
                  </ContainerInputIcon>
                  <Input 
                    placeholder="***************"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password)=> setPassword(password)}
                  />
                  
                </View>

                <Button onPress={()=> handleSubmit()}>
                {
                    visibleActivity === true 
                    ? <ActivityIndicator color="#FFF" size={30} />
                    : <TextoLogin> Login </TextoLogin>
                  }
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