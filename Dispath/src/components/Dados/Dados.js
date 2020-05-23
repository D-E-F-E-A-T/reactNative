import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function Dados() {
 return (
   <View>
       <TextInput
       style={styles.ContainerInput}
        // value={}
        placeholder="Nome"
        editable={false}
       />

        <TextInput
        style={styles.ContainerInput}
        // value={}
        placeholder="E-mail"
        editable={false}
       />

<TextInput
        style={styles.ContainerInput}
        // value={}
        placeholder="E-mail"
        editable={false}
       />
   </View>
  );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    ContainerInput: {
        borderColor: '#CCC',
        borderWidth: 1,

        borderRadius: 7,
        width: 200,
        marginTop: 5,

        backgroundColor: '#DDD',
    }
});