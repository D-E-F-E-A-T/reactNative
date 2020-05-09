import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Cabecalho from './components/Cabecalho';


export default class Route extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Animatable.View 
                    style={styles.cabecalho}
                    animation="bounceIn"
                    useNativeDriver
                    duration={2000}
                >
                    <TouchableOpacity
                        style={styles.btnInicio}
                        onPress={() => Alert.alert('Foca Na Saúde', 
                                        'Um App para ajudar você a ter uma vida saudável.')}
                    >
                        <Text style={styles.textoCabecalho}> Bem-Estar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnInicioTemplate}
                        onPress={() => Alert.alert('Foca Na Saúde', 
                                        'Versão: 0.1.0 \n \nDesenvolvido por: Marcelo Rafael \n \ncontato: mrtecnologybr@gmail.com')}
                    >
                        <Text style={styles.textoCabecalho}> Saúde </Text>
                    </TouchableOpacity>
                </Animatable.View>

                    

                {/* Parte Inferior */}
                <View style={styles.inferior}>
                    <Animatable.View 
                        style={styles.containerInferior}
                        animation = "fadeInUp"
                        useNativeDriver
                        duration={2000}
                    >

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Calculadora01')}
                        >
                            <View style={styles.containerDentroBtn}>
                                <Image
                                    style={styles.img}
                                    source={require('./img/imc.png')} />
                                <Text style={{textAlign: 'center', fontSize: 20}}> IMC </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Calculadora02')}
                        >
                            <View style={styles.containerDentroBtn}>
                                <Image
                                    style={styles.img}
                                    source={require('./img/pesoideal.png')} />
                                <Text style={{textAlign: 'center', fontSize: 20}}> Peso Ideal  </Text>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View 
                        style={styles.containerInferior}
                        animation="fadeInUp"
                        useNativeDriver
                        duration={2000}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Tela2')}
                        >
                            <View style={styles.containerDentroBtn}>
                                <Image
                                    style={styles.img}
                                    source={require('./img/dicasC.png')} />
                                <Text style={{textAlign: 'center', fontSize: 20}}> Dicas </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            // style={styles.btnCorpo}
                            onPress={() => this.props.navigation.navigate('Receitas')}
                        >
                            <View style={styles.containerDentroBtn}>
                                <Image
                                    style={styles.img}
                                    source={require('./img/dietaC.png')} />
                                <Text style={{textAlign: 'center', fontSize: 20}}> Receitas </Text>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                        
                </View>
                <Text> V 0.1.0 </Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerCorpo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn1: {
        color: '#222',
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
    },
    cabecalho: {
        marginBottom: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#7bed9f',
    },
    textoCabecalho: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#222',
        textAlign:'center',
    },
    btnInicio: {
        backgroundColor: '#FFF', 
        padding: 5, 
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        width: 170,
    },
    btnInicioTemplate:{
        backgroundColor: '#FFF', 
        padding: 5, 
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        width: 170,
    },
    img: {
        width: 150,
        height:150,
        // marginBottom: 20,
        // borderWidth: 3,
        // borderColor: '#333',
        // borderRadius: 10,
        margin: 5,
    },
    containerBtnImc: {
        marginTop: 30,
    },
    inferior: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    containerInferior: {
        flexDirection: 'row',

    },
    containerDentroBtn: {
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 10,
        margin: 3,
        backgroundColor: '#7BED9F',
    }
});