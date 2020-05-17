import React from 'react';
import { 
    View, Text, TouchableOpacity, Image, 
    StyleSheet, 
} from 'react-native';

export default function Profile() {
 return (
   <View>
       <TouchableOpacity>
       <View style={styles.containerCardImpar}>
        <Image style={styles.img} source={require('../../assets/img/tecnologica.png')} />
        <Text style={styles.txtView}> Cálculos </Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.containerCardPar}>
        <Image style={styles.img} source={require('../../assets/img/utensilios.png')} />
        <Text style={styles.txtView}> Trabalhos </Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.containerCardImpar}>
        <Image style={styles.img} source={require('../../assets/img/escritorio.png')} />
        <Text style={styles.txtView}> Escritório </Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.containerCardPar}>
        <Image style={styles.img} source={require('../../assets/img/esportes-e-competicao.png')} />
        <Text style={styles.txtView}> Lazer </Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.containerCardImpar}>
        <Image style={styles.img} source={require('../../assets/img/literatura.png')} />
        <Text style={styles.txtView}> Estudos </Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.containerCardPar}>
        <Image style={styles.img} source={require('../../assets/img/mesquita-id-kah.png')} />
        <Text style={styles.txtView}> Perfil </Text>
       </View>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerCardImpar: {
        backgroundColor: 'rgba(245, 246, 250,0.7)', margin: 5,
        flexDirection: 'row', padding: 10, borderColor:'#CCC', borderWidth: 1,
        borderRadius: 7, alignItems: 'center', justifyContent:'space-between',
        borderTopRightRadius: 40, borderTopLeftRadius: 40,
    },
    containerCardPar: {
        backgroundColor: 'rgba(245, 246, 250,0.7)', margin: 5, marginTop: -3,
        flexDirection: 'row', padding: 10, borderColor:'#CCC', borderWidth: 1,
        borderRadius: 7, alignItems: 'center', justifyContent:'space-between',
        borderBottomRightRadius: 40, borderBottomLeftRadius: 40,
    },
    img: {
        width: 30, height: 30, marginLeft: 5
    },
    txtView: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
        color: '#ff7979',
    }
});

