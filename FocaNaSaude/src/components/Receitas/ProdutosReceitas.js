import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    ScrollView,
} from 'react-native';

// import Cabecalho from  '../Cabecalho';

export function Noticias() {
    return(
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text> Notícias </Text>
        </View>

    );
}

export default class Tela2 extends Component{
    constructor(props){
        super(props);

        this.state = { 
            modalVisible: false,
        }

        this.fecharModal = this.fecharModal.bind(this);
        this.chamaTela = this.chamaTela.bind(this);
    }


    fecharModal(){
        const state = this.state;

        state.modalVisible = false;

        this.setState(state);
    }

    chamaTela(){
        const chave = this.props.data.key;

        const state = this.state;

        state.modalVisible = true;

        this.setState(state);

        // if(chave === 1) {
        //     return alert(chave);
        // } else if(chave === 2){
        //     return alert(chave);
        // } else if(chave === 3){
        //     return alert(chave);
        // } else if(chave === 4){
        //     return alert(chave);
        // } else if(chave === 5){
        //     return alert(chave);
        // }
    }

    render(){

        const {cabecalho, corpo, fonte, resumo} = this.props.data;
        return(
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() =>  this.chamaTela()}
                >
                <View style={styles.containerFLat}>
                    <Text style={{textAlign: 'center', color:'#A65820'}}> Receitas</Text>
                    <Text style={styles.cabecalhoFlat}> {cabecalho} </Text>
                    <Text style={styles.corpoFlat}> {resumo} </Text>
                
                    
                </View>
                
                </TouchableOpacity>

                <Modal
                    visible={this.state.modalVisible}
                    animationType="slide"
                >
                    <View style={styles.containerModalInterno}>
                        <View style={styles.corpoModal}>
                            <TouchableOpacity style={styles.estiloBotao} onPress={() => this.fecharModal()}>
                                <Text style={styles.estiloTextoBotao} > Voltar </Text>
                            </TouchableOpacity>
                            
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                            >
                                <Text style={styles.cabecalhoFlat}> {cabecalho} </Text>
                                <Text style={styles.corpoFlat}> {corpo} </Text>
                                <Text style={styles.fonteFlat}> Fonte: {fonte} </Text>
                                <Text style={styles.fonteFlat}></Text>
                                
                            </ScrollView>
                        </View>
                    </View>

                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        height: 150,
        padding: 10,
    },
    estiloBotao: {
        backgroundColor: '#FFF',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        textAlign:'center',
    },
    estiloTextoBotao: {
        color: '#222',
        textAlign:'center',
    },
    img: {
        width: 80,
        height: 150,
    },
    cabecalhoFlat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        // backgroundColor: '#FFF'
    },
    containerModalInterno: {
        backgroundColor: '#CCC',
        flex: 1,
    },
    corpoModal: {
        margin: 8,
    },
    corpoFlat: {
        fontSize: 16,
    },
    fonteFlat: {
        fontSize: 11,
        color: '#000',
        marginTop: 5,
        paddingBottom: 10,
    }

});