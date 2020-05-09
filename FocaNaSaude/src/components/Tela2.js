import React, { Component, Children } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Alert,
    ActivityIndicator,
} from 'react-native';

import firebase from 'firebase';


import Produtos from './Produtos';
import Cabelho from './Cabecalho';


export default class Tela2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: [],
            modalVisible: false,
            loading: true,
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

          firebase.database().ref("feeds/noticiasSaude").on('value', (snapshot) => {
            let state = this.state;
            
            state.feed = [];

            snapshot.forEach((childItem) => {
                state.feed.push({
                    key: childItem.key,
                    cabecalho: childItem.val().cabecalho,
                    corpo: childItem.val().corpo,
                    resumo: childItem.val().resumo
                });
            });

            this.setState(state);
              
          });
        

        this.voltarParaOInicio = this.voltarParaOInicio.bind(this);

        
    }

    componentDidMount(){
        this.setState({loading: false });
    }

    voltarParaOInicio(){
        return this.props.navigation.navigate('Route');
    }
    

    render(){
        if(this.state.loading){
            return(

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator color="#7bed9f" size={40}/>
            </View>
            );
        } else {
            return(
                <View style={styles.container}>
                    <Cabelho 
                        data={() => this.voltarParaOInicio()}
                        sobre={() => Alert.alert('Dicas de Saúde',
                                        'Dicas saldáveis para uma vida melhor')} 
                    />
                    
                    
                    <FlatList
                        data={this.state.feed}
                        keyExtractor={ (item) => item.key}
                        renderItem={ ({item}) => <Produtos data={item} />}
                    />

                    

                    
                </View>
            );
        }
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