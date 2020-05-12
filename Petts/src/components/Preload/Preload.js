import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import firebase from '../../services/firebaseConnection';

import { View, Text, ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Preload = ({ navigation }) => {

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        navigation.navigate('Tabs');
      } else {
        navigation.navigate('SignIn');
      }
    });
  },[]);

  return (
      <Container>
        
          <Animatable.View
            animation="pulse"
            useNativeDriver
            iterationCount="infinite"
          >
            <Ionicons name="ios-paw" size={80} color="rgba(224, 86, 253,0.5)" />
          </Animatable.View>

          <ActivityIndicator color="rgba(224, 86, 253,0.5)" size={15} />
        
      </Container>
  );
}



export default Preload;