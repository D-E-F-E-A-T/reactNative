import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Cabecalho from './Cabecalho';

export default class Tela1 extends Component{
    constructor(props){
        super(props);

        this.state = {
            nome: '',
        }

        this.mudaNome= this.mudaNome.bind(this);
        this.voltarParaOInicio = this.voltarParaOInicio.bind(this);
     }

    async componentDidMount(){
        await AsyncStorage.getItem('nome').then((value) => {
            this.setState({nome: value});
        });
    }

    async componentDidUpdate(_, prevState){
        const nome = this.state.nome;

        if(prevState !== nome){
            await AsyncStorage.setItem('nome', nome);
        }
    }

    mudaNome(item) {
        const state = this.state;

        state.nome = item

        this.setState(state);
    }

    voltarParaOInicio(){
        return this.props.navigation.navigate('Route');
    }
    render(){
        return(
            <View style={styles.container}>
                <Cabecalho data={() => this.voltarParaOInicio() }  />

                <TextInput
                    style={styles.textinput}
                    value={this.state.nome}
                    placeholder='Digite Seu Nome...'
                    onChangeText={ (item) => this.mudaNome(item) }
                />

                <Text> {this.state.nome} </Text>

                <TouchableOpacity
                    style={styles.estiloBotao}
                    onPress={ () => alert('Sucesso')}
                >
                    <Text style={styles.textoBotao}> Click </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinput: {
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    estiloBotao: {
        backgroundColor: '#888',
        padding: 5,
        borderRadius: 10,
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 20,
    },
    
});