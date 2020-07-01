import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { 
    Container, Title, InputForm, Button, TextButton,
    Header, ContainerInputs, ContainerPicker, PickerSelect,
    ContainerEndereco, InputNumero, InputEndereco,  
} from './styles';

export default function ScreenEnpreendedor({ navigation }) {

 const[estado, setEstado] = useState('');
 const[cidade, setCidade] = useState('');
 const[especialidade, setEspecialidade] = useState('');
 return (
   <Container>
       <Header>
        <Button onPress={()=> navigation.navigate('ScreenFirstEnter')}>
            <Icon name="ios-arrow-back" color="#FFF" size={30} />
        </Button>

        <View style={{ alignItems:'center', justifyContent:'center', }}>
            <Title> Bem-Vindo </Title>
            <Title> Empreendedor </Title>
        </View>
       </Header>
        <ContainerInputs>

            <ContainerPicker>
                <PickerSelect
                    selectedValue={estado}
                    onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
                >
                    <PickerSelect.Item label="Pará" value='para' />
                    <PickerSelect.Item label="Amazonas" value='amazonas' />
                    <PickerSelect.Item label="Ceará" value='ceara' />
                    <PickerSelect.Item label="Recife" value='Recife' />
                </PickerSelect>
            </ContainerPicker>

            <ContainerPicker>
                <PickerSelect
                    selectedValue={cidade}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}
                >
                    <PickerSelect.Item label="Belém" value='belem' />
                    <PickerSelect.Item label="Manaus" value='manaus' />
                    <PickerSelect.Item label="Fortaleza" value='fortaleza' />
                    <PickerSelect.Item label="Pernanbuco" value='pernambuco' />
                </PickerSelect>
            </ContainerPicker>
        </ContainerInputs>
        <InputForm placeholder="Nome" />
        <InputForm placeholder="E-mail" />
        <InputForm placeholder="Teefone" />

        <ContainerEndereco>
            <InputEndereco placeholder="Endereço" />
            <InputNumero placeholder="Número" />
        </ContainerEndereco>

        <ContainerPicker  style={{ width: '90%', }}>
            <PickerSelect
             style={{ width: '90%', }}
                selectedValue={especialidade}
                onValueChange={(itemValue, itemIndex) => setEspecialidade(itemValue)}
            >
                <PickerSelect.Item label="Pizza" value='pizza' />
                <PickerSelect.Item label="Coxinha" value='coxinha' />
                <PickerSelect.Item label="Pães e Massas" value='paes_e_massas' />
                <PickerSelect.Item label="Pastel" value='pastel' />
            </PickerSelect>
        </ContainerPicker>

        <Button onPress={() => navigation.navigate('ScreenEmpresa')}>
            <TextButton> Próximo </TextButton>
            <Icon name="ios-arrow-forward" color="#FFF" size={20} />
        </Button>
   </Container>
  );
}