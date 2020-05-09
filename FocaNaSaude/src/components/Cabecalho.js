import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class Cabecalho extends Component {
    render() {
        return(
            <View style={styles.cabecalho}>
                    <TouchableOpacity
                        style={styles.btnInicio}
                        onPress={ this.props.data }
                    >
                        <Text style={styles.textoCabecalho}> Início </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnTemplate}
                        onPress={ this.props.sobre }
                    >
                        <Text style={styles.textoCabecalho}> Sobre </Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#7bed9f',
    },
    textoCabecalho: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#222',
        textAlign: 'center',
    },
    btnInicio: {
        backgroundColor: '#FFF', 
        padding: 5, 
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        width: 150,
    },
    btnTemplate:{
        backgroundColor: '#FFF', 
        padding: 5, 
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        width: 150,
    }
});