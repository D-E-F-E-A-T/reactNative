import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Cabecalho from './Cabecalho';

export default class Calculadora01 extends Component{
    constructor(props){
        super(props);

        this.state = { 
            resultado:"",
            numero1: 0,
            saude:'',
            coloText:'#7bed9f',
            checked: 'first',
            valueRadio: '1',
            colorRadio1: '#7bed9f',
            colorRadio2: '#FFF'
        }

        //  Preservando o contexto de atuação da função
        this.calcular = this.calcular.bind(this);
        this.voltarParaOInicio = this.voltarParaOInicio.bind(this);
    }
    
    calcular(){
        let resultadoSoma;
        let s = this.state;

        
        
        if(s.numero1 === 0) {
            Alert.alert('Atenção', 'Preencha a sua altura');
        } else {
            if(s.valueRadio == 1) {
                // P = h - 100 - h-150/k
                resultadoSoma = (parseFloat(s.numero1)*100 -100) - (parseFloat(s.numero1)*100 -150)/4 ;
                s.saude = 'KG';

                s.resultado = resultadoSoma.toFixed(2);
                this.setState(s);
            } else {
                resultadoSoma = (parseFloat(s.numero1)*100 -100) - (parseFloat(s.numero1)*100 -150)/2;
                s.saude = 'KG';

                s.resultado = resultadoSoma.toFixed(2);
                this.setState(s);
            }
        }
        
    }

    escolhaRadio(valor){
        const s = this.state;
        s.valueRadio = valor;

        this.setState(s);

        if(s.valueRadio == 1){
            s.colorRadio1 = '#7bed9f';
            s.colorRadio2 = '#FFF';
        } else {
            s.colorRadio2 = '#7bed9f';
            s.colorRadio1 = '#FFF'
        }

    }

    voltarParaOInicio(){
        return this.props.navigation.navigate('Route');
    }

    render() {

        // const { checked } = this.state;
        return(
            <View>
                <Cabecalho 
                    data={() => this.voltarParaOInicio() } 
                    sobre={() => Alert.alert('Peso Ideal',
                                    'É o valor, numérico e relativo, do peso que você deveria estar medindo em relação a sua altura. Lembre-se sempre de consultar um médico.')}
                />

                <View style={styles.estiloResult}>
                    <TextInput
                        placeholder="Resultado"
                        editable={false}
                        style={{color: this.state.coloText, fontWeight: 'bold', fontSize: 60, textAlign: 'center'}}
                        value= {this.state.resultado}
                    />
                    <Text style={{color: this.state.coloText, fontWeight: 'bold', fontSize: 20, textAlign: 'center'} }> {this.state.saude} </Text>
                </View>


                
                <View style={{margin:20 ,justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: '#7bed9f',fontSize: 20, marginRight: 5, fontWeight: 'bold'}}>Masculino</Text>
                        <TouchableOpacity
                            style={{marginTop: 5, height: 20,borderRadius: 50, backgroundColor:this.state.colorRadio1, borderColor:'#333', borderWidth: 1}}
                            onPress={() => this.escolhaRadio(1)}
                        >
                            <Text style={{color:this.state.colorRadio1}}> M </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 10}}>
                        <Text  style={{color: '#7bed9f',fontSize: 20, marginRight: 5, fontWeight: 'bold'}}> Feminino </Text>
                        <TouchableOpacity
                            style={{marginTop: 5, height: 20,borderRadius: 50, backgroundColor:this.state.colorRadio2, borderColor:'#333', borderWidth: 1}}
                            onPress={() => this.escolhaRadio(2)}
                        >
                            <Text style={{color:this.state.colorRadio2}}> F  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </View> */}
                
                
    
                <View style={styles.containerNumeros}>
                    <TextInput style={styles.numero}
                        placeholder="Altura (m)"
                        keyboardType="numeric"
                        // value={this.state.numero1}
                        onChangeText={ (numero1) => {this.setState({numero1})} }
                    />
                    
                </View>
                
    
                <View  style={styles.estiloBotao}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.calcular}
                    >
                        <Animatable.View
                            animation="fadeInRight"
                            useNativeDriver
                            duration={2000}
                        >
                            <Text style={styles.textoButton}> Calcular </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
                
    
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textoCabecalho: {
        color: '#FFF',
        fontSize: 25,
    },
    numero: {
        width: 140,
        height: 80,
        fontSize: 30,
        borderColor: '#F2EDED',
        borderBottomColor: '#333',
        borderWidth: 1,
        marginLeft: 30,
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
    