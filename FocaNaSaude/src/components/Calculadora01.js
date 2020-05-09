import React, { Component, useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Cabecalho from './Cabecalho';

export default class Calculadora01 extends Component{
    constructor(props){
        super(props);

        this.state = { 
            resultado:"",
            numero1: 0,
            numero2: 0,
            saude:'',
            coloText:'',
        }

        //  Preservando o contexto de atuação da função
        this.calcular = this.calcular.bind(this);
        this.voltarParaOInicio = this.voltarParaOInicio.bind(this);
    }
    
    calcular(){
        let state = this.state;

        if (state.numero1 === 0 || state.numero2 === 0) {
            Alert.alert('Atenção', 'Preencha todos os campos');
        } else {
            let resultadoSoma = parseFloat(state.numero2) /(parseFloat(state.numero1) * parseFloat(state.numero1)) ;


            state.resultado = resultadoSoma.toFixed(2);
            
            


            // Entre 18,5 e 24,9	Peso normal
            // Entre 25 e 29,9	Sobrepeso
            // Entre 30 e 34,9	Obesidade grau 1
            // Entre 35 e 39,9	Obesidade grau 2
            
            if(resultadoSoma < 16){
                state.saude = "Magreza Severa"
                state.coloText = '#227093'
            } else if(resultadoSoma < 18.5 ){
                state.saude = "Magreza Leve"
                state.coloText = '#227093'
            } else if(resultadoSoma <= 24.9){
            state.saude = "Peso Normal"
            state.coloText = '#0fb9b1'
            } else if(resultadoSoma <= 29.9) {
                state.saude = " Sobrepeso"
                state.coloText = '#f3a683'
            } else if(resultadoSoma <= 34.9) {
                state.saude = "Obesidade Grau I"
                state.coloText = '#fa8231'
            } else if(resultadoSoma > 39.9) {
                state.saude = "Obesidade Grau II"
                state.coloText = '#d63031'
            }

            this.setState(state);
        }

        

        
    }


    mudaFoto(){
        const s = this.state;
        if(s.resultado == ''){
            return null;
        } else if(s.resultado < 16){
            const imagem = <Image style={{width: 50, height: 80}} source={require('../img/normal.jpg')} />
            return imagem;
        } else if(s.resultado < 18.5 ){
            const imagem = <Image style={{width: 50, height: 80}}  source={require('../img/normal.jpg')} />
            return imagem;
        } else if(s.resultado <= 24.9){
            const imagem = <Image style={{width: 50, height: 80}}  source={require('../img/normal1.jpg')} />
            return imagem;
        } else if(s.resultado <= 29.9) {
            const imagem = <Image style={{width: 50, height: 80}}  source={require('../img/sobrepeso.jpg')} />
            return imagem;
        } else if(s.resultado <= 34.9) {
            const imagem = <Image style={{width: 50, height: 80}}  source={require('../img/obesidadeI.jpg')} />
            return imagem;
        } else if(s.resultado > 39.9) {
            const imagem = <Image style={{width: 50, height: 80}}  source={require('../img/obesidadeII.jpg')} />
            return imagem;
        }
    }

    voltarParaOInicio(){
        return this.props.navigation.navigate('Route');
    }

    render() {
       

        return(
            <View>

                <Cabecalho 
                    data={() => this.voltarParaOInicio() }
                    sobre={() => Alert.alert('IMC',
                            'O índíce de Massa Corporea é uma avaliação do peso em relação a altura para verificar se você está dentro do seu peso ideial')}
                 />
    
                <View style={styles.estiloResult}>

                    

                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            placeholder="Resultado"
                            editable={false}
                            style={{color: this.state.coloText, fontWeight: 'bold', fontSize: 60, textAlign: 'center'}}
                            value= {this.state.resultado}
                        />
                        <View style={{marginTop: 20}}>
                            { this.mudaFoto() }
                        </View>
                    </View>
                    <Text style={{color: this.state.coloText, fontWeight: 'bold', fontSize: 20, textAlign: 'center'} }> {this.state.saude} </Text>
                
                </View>
                
                
    
                <Animatable.View
                    style={styles.containerNumeros}
                    animation="slideInDown"
                    useNativeDriver
                    duration={2000}
                >
                    <TextInput style={styles.numero}
                        placeholder="Altura(m)"
                        keyboardType="numeric"
                        // value={this.state.numero1}
                        onChangeText={ (numero1) => {this.setState({numero1})} }
                    />
                    
                    <TextInput style={styles.numero}
                        placeholder="Massa(kg)"
                        keyboardType="numeric"
                        // value={this.state.numero2}
                        onChangeText={ (numero2) => {this.setState({numero2})} }
                    />
                </Animatable.View>
    
                {/* <Picker style={styles.picker}
                    selectedValue={this.state.operacao}
                    onValueChange={op => { this.setState({ operacao: op }) }}
                >
                    <Picker.Item label="Soma" value="soma" color="#333" />
                    <Picker.Item label="Subtracao" value="subtracao" color="#333" />  
                </Picker> */}
                
               
                <Animatable.View 
                    style={styles.estiloBotao}
                     animation="flipInY"
                     useNativeDriver
                     duration={2000}
                >

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.calcular}
                    >
                        <Text style={styles.textoButton}> Calcular </Text>
                    </TouchableOpacity>
                </Animatable.View>
                
    
            </View>
        );
    }
}


const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 30,
        borderColor: '#F2EDED',
        borderBottomColor: '#333',
        borderWidth: 1,
        marginLeft: 30,
    },
    containerNumeros: {
        flexDirection: 'row',
        // margin: 15,
        // padding: 15,
    },
    textoMeio: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    picker: {
        marginTop: 50,
        padding: 15,
    },
    button:{
        marginTop: 60,
        padding: 40,
        backgroundColor: '#7bed9f',
    },
    textoButton: {
        color: '#FFF',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    result: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    estiloResult: {
        borderColor: '#7bed9f',
        borderWidth: 5,
        marginTop: 15,
        borderRadius: 10,
        margin: 8,
    }
});
    