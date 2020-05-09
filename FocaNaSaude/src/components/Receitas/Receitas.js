import React, { Component, Children } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Modal,
    Button,
    Alert,
} from 'react-native';

import firebase from 'firebase';

import ProdutosReceitas from './ProdutosReceitas';
import Cabecalho from '../Cabecalho';


export default class Receitas extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: [],
            modalVisible: false,

        }
          
        let firebaseConfig = {
            apiKey: "AIzaSyCnOtbzmlG7iu6fffK-pQRFKq77JiePUPk",
            authDomain: "meuapp-c2e3c.firebaseapp.com",
            databaseURL: "https://meuapp-c2e3c.firebaseio.com",
            projectId: "meuapp-c2e3c",
            storageBucket: "meuapp-c2e3c.appspot.com",
            messagingSenderId: "410909676981",
            appId: "1:410909676981:web:441a733c2a148c703ab5fc",
            measurementId: "G-XXYZ7GN1YF"
          };
          // Initialize Firebase
          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
          }

          firebase.database().ref("feeds/receitas").on('value', (snapshot) => {
            let state = this.state;
            
            state.feed = [];

            snapshot.forEach((childItem) => {
                state.feed.push({
                    key: childItem.key,
                    cabecalho: childItem.val().cabecalho,
                    corpo: childItem.val().corpo,
                    resumo: childItem.val().resumo,
                    fonte: childItem.val().fonte,
                });
            });

            this.setState(state);
              
          });
        

        this.voltarParaOInicio = this.voltarParaOInicio.bind(this);

        
    }

    voltarParaOInicio(){
        return this.props.navigation.navigate('Route');
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Cabecalho 
                    data={() => this.voltarParaOInicio()}
                    sobre={() => Alert.alert('Receitas',
                                    'Dicas de receitas saudáveis para um dia maravilhoso')} 
                />
                
                
                <FlatList
                    data={this.state.feed}
                    keyExtractor={ (item) => item.key}
                    renderItem={ ({item}) => <ProdutosReceitas data={item} />}
                />

                

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    estiloTextoBotao: {
        color: '#FFF',
        fontSize: 20,
    },
});