import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCOmmunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../services/firebaseConnection';

import { ImageBackground, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import { 
  Container, Input, Button, TextoLogin, TextoDica, ButtonReturn,
  ContainerCentro, 
} from './styles';
import { ThemeConsumer } from 'styled-components';

const SignIn = ({ navigation }) => {
  const image = { uri: "https://reactjs.org/logo-og.png" };

  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[visibleIndicator, setVisibleIndicator] = useState(false);

  firebase.auth().signOut();

  async function handleSubmit(){
    if(nome !== '' && email !=='' && password !== ''){
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ()=> {
        let uid = firebase.auth().currentUser.uid;

        await firebase.database().ref('users').child(uid).set({
          nome: nome
        });
      }).catch((error)=> {
        if(error.code === 'auth/weak-password'){
          alert('Senha deve ter no mínimo 6 caracters');
        }
        alert(error.code);
      });

      setVisibleIndicator(true);

      setTimeout(()=>{
        setVisibleIndicator(false);
      } ,5000);
    }
  }

  return(
      <>
        
        <ImageBackground source={require('../../assets/img/cat.jpg')} style={styles.image}>
            
            <Container>
                <ButtonReturn onPress={()=> navigation.navigate('SignIn') }>
                  <Icon name="md-arrow-back" size={30} color="rgba(224, 86, 253,1.0)" />
                </ButtonReturn>

                <ContainerCentro>
                  <View style={{ flexDirection:'row' }}>
                    <MaterialCOmmunityIcons style={{marginRight:15}} name="dog" size={50} color="rgba(224, 86, 253,0.5)" />
                    <MaterialCOmmunityIcons name="cat" size={50} color="rgba(224, 86, 253,0.5)" />
                  </View>

                  <TextoDica> Preencha os campos: </TextoDica>
                  <Input 
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(nome)=> setNome(nome)}
                  />
                  <Input 
                    placeholder="email@email.com"
                    value={email}
                    onChangeText={(email)=> setEmail(email)}
                  />
                  <Input 
                    placeholder="Senha"
                    value={password}
                    onChangeText={(password)=> setPassword(password)}
                    secureTextEntry={true}
                  />

                  <Button onPress={()=> handleSubmit()}>
                    {
                      visibleIndicator === true ? <ActivityIndicator color="#FFF" size={30} />
                      : <TextoLogin> Cadastrar </TextoLogin>
                    }
                      
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