import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import firebase from '../../../services/firebaseConnection';
import Icon from 'react-native-vector-icons/Ionicons'

import { 
  Container, Header, Button, TextoLogo,
} from './styles';

export default function Painel() {
 
 useEffect(()=>{

  async function getNome(){
    let uid = firebase.auth().currentUser.uid;

    await firebase.database().ref('users').child(uid)
    .once('value').then((snapshot)=> {
      setNome(snapshot.val().nome);
    });
  }

  getNome();

 },[]);
 
 const[nome, setNome] = useState('');
 const[profiles, setProfiles] = useState([
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
   {key:1, nome:"Spayk", img: require('../../../assets/img/spayk.jpeg') },
 ]);

 return (
   <Container>
      <Header>
        <View style={{flexDirection:'row', marginLeft: 5,}}>
          <Icon style={{marginVertical: -4}} name="ios-paw" color="#FFF" size={30} />
          <TextoLogo> Petts </TextoLogo>
        </View>
        <TextoLogo> {nome} </TextoLogo>

      </Header>

      <FlatList
        data={profiles}
        keyExtractor={(item)=> item.key}
        renderItem={({item})=> <Profiles data={item}/> }
      />
   </Container>
  );
}

export function Profiles({ data }){
  return(
    <View style={{ alignItems:'center', marginBottom: 15 }}>
      <View style={{ flexDirection:'row', alignItems:"center", justifyContent:"space-between" }}>
        <Text style={{fontWeight:'bold'}}> {data.nome}  </Text>
        <Image style={{ width: 40, height: 40, borderRadius: 100, borderColor: 'rgba(224, 86, 253,0.5)', borderWidth:1, }} source={data.img}/>
      </View>
      <Image style={{ width: '80%', height: 200, borderRadius:7, }} source={data.img}/>
    </View>
  );
}